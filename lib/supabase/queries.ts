import { createSupabaseClient } from './server'
import type { Course } from '@/types/course'

export async function getCourses(): Promise<Course[]> {
  const supabase = await createSupabaseClient()

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Failed to fetch courses:', error.message)
    throw new Error('Failed to fetch courses from database')
  }

  return data || []
}

export async function getUserGreeting(): Promise<string> {
  return 'Welcome back'
}
