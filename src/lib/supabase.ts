import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://bfnhfgbtlayjjxuwvszy.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmbmhmZ2J0bGF5amp4dXd2c3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NzcyMTksImV4cCI6MjA2NzQ1MzIxOX0.pquQtmoeXOoyfNckbCrl_tkB6XTDxiscaHqpQullXzk'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface WaitlistEntry {
  id?: string
  name: string
  email: string
  club_name: string
  county: string
  club_number: string
  phone_number: string
  created_at?: string
}