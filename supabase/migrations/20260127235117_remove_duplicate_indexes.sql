/*
  # Remove Duplicate and Unused Indexes

  ## Performance Optimizations
  
  Removes duplicate indexes and some of the most obviously unused indexes to improve:
  - Write performance (fewer indexes to update on INSERT/UPDATE)
  - Storage efficiency (less disk space used)
  - Maintenance overhead (fewer indexes to maintain)
  
  ## Indexes Removed
  - Duplicate indexes on `app_meeting_collaboration` 
  - Duplicate indexes on `simple_poll_votes`
  - Sample of clearly unused indexes based on table usage patterns
  
  ## Performance Impact
  - Reduces write operation overhead
  - Frees up storage space
  - Simplifies query optimization
  
  ## Important Notes
  - Kept at least one index for each duplicate pair
  - Only removed indexes that are confirmed duplicates or clearly unused
  - Critical indexes for foreign keys and frequently queried columns are retained
*/

-- Remove duplicate indexes
DROP INDEX IF EXISTS idx_app_meeting_collaboration_type;
DROP INDEX IF EXISTS idx_simple_poll_votes_poll_results;

-- Remove a sample of unused indexes (keeping the most critical ones)
DROP INDEX IF EXISTS idx_club_profiles_club_type;
DROP INDEX IF EXISTS idx_club_profiles_youtube_url;
DROP INDEX IF EXISTS idx_tabletopicscorner_is_active;
DROP INDEX IF EXISTS idx_tabletopicscorner_assigned_at;
DROP INDEX IF EXISTS idx_app_club_meeting_meeting_day;
DROP INDEX IF EXISTS idx_grammarian_daily_elements_meeting_date;
DROP INDEX IF EXISTS idx_app_evaluation_pathway_created_at;
DROP INDEX IF EXISTS idx_educational_speaker_booking_status;
DROP INDEX IF EXISTS idx_app_user_invitation_invite_token;
DROP INDEX IF EXISTS idx_club_association_requests_auth_status;
DROP INDEX IF EXISTS idx_speeches_created_at;
DROP INDEX IF EXISTS idx_app_club_meeting_mode;
DROP INDEX IF EXISTS idx_app_club_meeting_created_at;
DROP INDEX IF EXISTS idx_role_types_grouping;
DROP INDEX IF EXISTS idx_resources_resource_type;
DROP INDEX IF EXISTS idx_resources_created_at;
DROP INDEX IF EXISTS idx_waitlist_entries_email;
DROP INDEX IF EXISTS idx_waitlist_entries_created_at;
DROP INDEX IF EXISTS idx_user_invitations_invite_token;
DROP INDEX IF EXISTS idx_polls_questions_active;
DROP INDEX IF EXISTS idx_role_types_is_active;
DROP INDEX IF EXISTS idx_club_profiles_club_status;
DROP INDEX IF EXISTS idx_clubs_active;
DROP INDEX IF EXISTS idx_app_user_profiles_role;
DROP INDEX IF EXISTS idx_app_user_profiles_active;
DROP INDEX IF EXISTS idx_app_user_profiles_facebook_url;
DROP INDEX IF EXISTS idx_app_user_profiles_twitter_url;