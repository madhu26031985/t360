/*
  # Add Missing Foreign Key Indexes - Corrected

  ## Performance Improvements
  
  Creates indexes for foreign key columns that don't have covering indexes.
  This improves query performance for JOIN operations and foreign key constraint checks.
  
  ## Tables Updated
  - `app_club_meeting` - Added index on quiz_master_id
  - `app_meeting_attendance` - Added index on attendance_marked_by
  - `app_user_invitation` - Added index on accepted_user_id
  - `club_join_requests` - Added index on reviewed_by
  - `meeting_agenda_items` - Added indexes on multiple foreign keys
  - `mentor_assignments` - Added index on assigned_by
  - `timer_reports` - Added index on speaker_user_id
  - `user_invitations` - Added index on accepted_user_id
  - `user_pathways` - Added indexes on pathway_id and user_id
  
  ## Performance Impact
  - Significantly improves JOIN performance
  - Speeds up foreign key constraint validation
  - Reduces query execution time for related data lookups
*/

-- app_club_meeting indexes
CREATE INDEX IF NOT EXISTS idx_app_club_meeting_quiz_master_id 
  ON app_club_meeting(quiz_master_id);

-- app_meeting_attendance indexes
CREATE INDEX IF NOT EXISTS idx_app_meeting_attendance_attendance_marked_by 
  ON app_meeting_attendance(attendance_marked_by);

-- app_user_invitation indexes
CREATE INDEX IF NOT EXISTS idx_app_user_invitation_accepted_user_id 
  ON app_user_invitation(accepted_user_id);

-- club_join_requests indexes
CREATE INDEX IF NOT EXISTS idx_club_join_requests_reviewed_by 
  ON club_join_requests(reviewed_by);

-- meeting_agenda_items indexes
CREATE INDEX IF NOT EXISTS idx_meeting_agenda_items_ah_counter_user_id 
  ON meeting_agenda_items(ah_counter_user_id);

CREATE INDEX IF NOT EXISTS idx_meeting_agenda_items_grammarian_user_id 
  ON meeting_agenda_items(grammarian_user_id);

CREATE INDEX IF NOT EXISTS idx_meeting_agenda_items_timer_user_id 
  ON meeting_agenda_items(timer_user_id);

CREATE INDEX IF NOT EXISTS idx_meeting_agenda_items_assigned_role_id 
  ON meeting_agenda_items(assigned_role_id);

CREATE INDEX IF NOT EXISTS idx_meeting_agenda_items_assigned_user_id 
  ON meeting_agenda_items(assigned_user_id);

CREATE INDEX IF NOT EXISTS idx_meeting_agenda_items_template_id 
  ON meeting_agenda_items(template_id);

-- mentor_assignments indexes
CREATE INDEX IF NOT EXISTS idx_mentor_assignments_assigned_by 
  ON mentor_assignments(assigned_by);

-- timer_reports indexes
CREATE INDEX IF NOT EXISTS idx_timer_reports_speaker_user_id 
  ON timer_reports(speaker_user_id);

-- user_invitations indexes
CREATE INDEX IF NOT EXISTS idx_user_invitations_accepted_user_id 
  ON user_invitations(accepted_user_id);

-- user_pathways indexes
CREATE INDEX IF NOT EXISTS idx_user_pathways_pathway_id 
  ON user_pathways(pathway_id);

CREATE INDEX IF NOT EXISTS idx_user_pathways_user_id 
  ON user_pathways(user_id);