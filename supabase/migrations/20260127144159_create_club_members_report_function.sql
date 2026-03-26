/*
  # Create Club Members Report Function

  1. New Functions
    - `get_club_members_report` - Secure function to fetch detailed member information for a club
      - Returns member profiles, roles, attendance stats, and roles completed
      - Only accessible to authenticated users who are members of the club
  
  2. Security
    - Function runs with SECURITY DEFINER to bypass RLS
    - Includes explicit security check to ensure user has access to the club
    - Returns comprehensive member data including social media, attendance, and performance stats
*/

CREATE OR REPLACE FUNCTION get_club_members_report(p_club_id uuid)
RETURNS TABLE (
  user_id uuid,
  full_name text,
  email text,
  phone_number text,
  about text,
  facebook_url text,
  linkedin_url text,
  instagram_url text,
  twitter_url text,
  youtube_url text,
  club_role text,
  is_authenticated boolean,
  days_present bigint,
  days_absent bigint,
  days_not_applicable bigint,
  roles_completed bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Security check: Verify the requesting user has access to this club
  IF NOT EXISTS (
    SELECT 1 
    FROM app_club_user_relationship 
    WHERE club_id = p_club_id 
    AND user_id = auth.uid()
    AND is_authenticated = true
  ) THEN
    RAISE EXCEPTION 'Access denied: You are not a member of this club';
  END IF;

  -- Return member data
  RETURN QUERY
  SELECT
    u.id as user_id,
    u.full_name,
    u.email,
    u.phone_number,
    u."About" as about,
    u.facebook_url,
    u.linkedin_url,
    u.instagram_url,
    u.twitter_url,
    u.youtube_url,
    cur.role as club_role,
    cur.is_authenticated,
    COUNT(DISTINCT CASE WHEN att.attendance_status = 'present' THEN att.id END) as days_present,
    COUNT(DISTINCT CASE WHEN att.attendance_status = 'absent' THEN att.id END) as days_absent,
    COUNT(DISTINCT CASE WHEN att.attendance_status = 'not_applicable' THEN att.id END) as days_not_applicable,
    COALESCE(COUNT(DISTINCT CASE WHEN rc.is_completed = true THEN rc.meeting_date END), 0) as roles_completed
  FROM app_club_user_relationship cur
  JOIN app_user_profiles u ON cur.user_id = u.id
  LEFT JOIN app_meeting_attendance att ON att.user_id = u.id AND att.club_id = cur.club_id
  LEFT JOIN role_completion_summary rc ON rc.assigned_user = u.full_name AND rc.club_name IN (SELECT name FROM clubs WHERE id = cur.club_id)
  WHERE cur.club_id = p_club_id
  GROUP BY u.id, u.full_name, u.email, u.phone_number, u."About", u.facebook_url, u.linkedin_url, u.instagram_url, u.twitter_url, u.youtube_url, cur.role, cur.is_authenticated
  ORDER BY cur.role, u.full_name;
END;
$$;
