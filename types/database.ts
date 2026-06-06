import type { Course } from './course'

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: Course
        Insert: Omit<Course, 'created_at'> & {
          created_at?: string
        }
        Update: Partial<Omit<Course, 'id' | 'created_at'>>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
