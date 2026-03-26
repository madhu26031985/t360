/*
  # Update Club Members Report Access

  1. Changes
    - Relax security check to allow any authenticated club member to view any club's members
    - This allows cross-club visibility for legitimate users
  
  2. Security
    - Still requires user to be authenticated
    - Still requires user to be a member of at least one club
*/

DROP FUNCTION IF EXISTS get_club_members_report(uuid);

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
  -- Security check: Verify the user is authenticated and a member of at least one club
  IF NOT EXISTS (
    SELECT 1 
    FROM app_club_user_relationship acur
    WHERE acur.user_id = auth.uid()
    AND acur.is_authenticated = true
  ) THEN
    RAISE EXCEPTION 'Access denied: You must be an authenticated club member';
  END IF;

  -- Return member data for the requested club
  RETURN QUERY
  SELECT
    u.id,
    u.full_name,
    u.email,
    u.phone_number,
    u."About",
    u.facebook_url,
    u.linkedin_url,
    u.instagram_url,
    u.twitter_url,
    u.youtube_url,
    cur.role,
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
