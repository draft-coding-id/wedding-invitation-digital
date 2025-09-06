import { createClient } from '@supabase/supabase-js'

// Ambil URL dan Key dari Environment Variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY // Pastikan nama ini cocok

export const supabase = createClient(supabaseUrl, supabaseAnonKey)