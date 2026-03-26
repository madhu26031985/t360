/*
  # Create waitlist entries table

  1. New Tables
    - `waitlist_entries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, unique, required)
      - `club_name` (text, required)
      - `county` (text, required)
      - `club_number` (text, required)
      - `phone_number` (text, required)
      - `created_at` (timestamp with timezone, default now)

  2. Security
    - Enable RLS on `waitlist_entries` table
    - Add policy for anonymous users to insert entries (public signup)
    - Add policy for authenticated users to read all entries (admin access)

  3. Performance
    - Add index on email for fast lookups
    - Add index on created_at for chronological sorting
*/

CREATE TABLE IF NOT EXISTS waitlist_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  club_name text NOT NULL,
  county text NOT NULL,
  club_number text NOT NULL,
  phone_number text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist_entries ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist, then recreate them
DO $$
BEGIN
  -- Drop existing insert policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'waitlist_entries' 
    AND policyname = 'Anyone can insert waitlist entries'
  ) THEN
    DROP POLICY "Anyone can insert waitlist entries" ON waitlist_entries;
  END IF;

  -- Drop existing select policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'waitlist_entries' 
    AND policyname = 'Authenticated users can read all waitlist entries'
  ) THEN
    DROP POLICY "Authenticated users can read all waitlist entries" ON waitlist_entries;
  END IF;
END $$;

-- Create policies
CREATE POLICY "Anyone can insert waitlist entries"
  ON waitlist_entries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all waitlist entries"
  ON waitlist_entries
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance (with IF NOT EXISTS checks)
CREATE INDEX IF NOT EXISTS idx_waitlist_entries_email ON waitlist_entries(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_entries_created_at ON waitlist_entries(created_at DESC);