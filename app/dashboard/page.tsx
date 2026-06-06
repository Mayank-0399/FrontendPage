import { Suspense } from 'react'
import Sidebar from '@/components/navigation/Sidebar'
import DashboardContent from '@/components/dashboard/DashboardContent'
import SkeletonCard from '@/components/shared/SkeletonCard'

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-dark-950">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-4 pb-24 pt-6 sm:px-6 md:pb-8 md:pt-8 lg:px-8">
        <section className="mx-auto max-w-7xl" aria-label="Student dashboard">
          <Suspense fallback={<DashboardSkeleton />}>
            <DashboardContent />
          </Suspense>
        </section>
      </main>
    </div>
  )
}

function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <SkeletonCard className="min-h-64 md:col-span-2" />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard className="min-h-64 md:col-span-2" />
    </div>
  )
}
