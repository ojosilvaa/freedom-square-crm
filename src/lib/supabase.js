import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://adbogvfcwvxyatrupicm.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkYm9ndmZjd3Z4eWF0cnVwaWNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0ODkzMzUsImV4cCI6MjA5NTA2NTMzNX0.PBHYk_ML4p9xeyChPDiabTYpvNW4egWLDoOjqJZyqTw'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
