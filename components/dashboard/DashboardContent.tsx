import BentoGrid from './BentoGrid'
import HeroTile from './HeroTile'
import CourseCard from './CourseCard'
import ActivityTile from './ActivityTile'
import { getCourses } from '@/lib/supabase/queries'
import type { Course } from '@/types/course'

export default async function DashboardContent() {
  let courses: Course[] = []
  let errorMessage: string | null = null

  try {
    courses = await getCourses()
  } catch (err) {
    console.error('Failed to load courses:', err)
    errorMessage =
      'Live course data is unavailable. Check your Supabase environment variables and courses table permissions.'
  }

  return (
    <BentoGrid>
      <HeroTile name="Developer" streak={12} />
      {errorMessage && (
        <section className="rounded-xl border border-rose-400/30 bg-rose-500/10 p-5 text-sm text-rose-100 md:col-span-2 lg:col-span-2">
          {errorMessage}
        </section>
      )}
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
      <ActivityTile />
    </BentoGrid>
  )
}
