/*
  # Create Clubs with Member Count Function

  1. New Functions
    - `get_clubs_with_member_count` - Returns clubs the authenticated user has access to with member counts
      - Lists all clubs where the user is an authenticated member
      - Includes total member count for each club
  
  2. Security
    - Function runs with SECURITY DEFINER to bypass RLS
    - Only returns clubs where the requesting user is an authenticated member
*/

CREATE OR REPLACE FUNCTION get_clubs_with_member_count()
RETURNS TABLE (
  id uuid,
  name text,
  member_count bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id,
    c.name,
    COUNT(cur.id) as member_count
  FROM clubs c
  LEFT JOIN app_club_user_relationship cur ON c.id = cur.club_id
  WHERE c.id IN (
    SELECT club_id 
    FROM app_club_user_relationship 
    WHERE user_id = auth.uid() 
    AND is_authenticated = true
  )
  GROUP BY c.id, c.name
  ORDER BY c.name;
END;
$$;
