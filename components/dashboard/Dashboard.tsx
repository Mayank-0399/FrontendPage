import { Suspense } from 'react'
import SkeletonCard from '@/components/shared/SkeletonCard'
import DashboardContent from './DashboardContent'

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto px-4 pb-24 pt-6 sm:px-6 md:pb-8 md:pt-8 lg:px-8">
      <section className="mx-auto max-w-7xl" aria-label="Student dashboard">
        <Suspense fallback={<SkeletonGrid />}>
          <DashboardContent />
        </Suspense>
      </section>
    </main>
  )
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
