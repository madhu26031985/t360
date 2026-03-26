/*
  # Fix Critical Security Issues - Part 1: RLS and Sensitive Data

  ## Critical Security Fixes
  
  1. **Enable RLS on Tables with Policies**
     - `app_club_user_relationship` - Has policies but RLS disabled
     - `password_reset_tokens` - Has policies but RLS disabled
     - `role_bookings` - Has policies but RLS disabled
     - `user_performance_metrics` - Has policies but RLS disabled
  
  2. **Secure Sensitive Data**
     - Enable RLS on `password_reset_tokens` to prevent exposure of sensitive tokens
     
  ## Security Impact
  - Prevents unauthorized access to sensitive password reset tokens
  - Ensures RLS policies are actually enforced on tables that have them defined
  - Closes security holes where data could be accessed without proper authorization
*/

-- Enable RLS on tables that have policies but RLS is disabled
ALTER TABLE IF EXISTS app_club_user_relationship ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS password_reset_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS role_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS user_performance_metrics ENABLE ROW LEVEL SECURITY;