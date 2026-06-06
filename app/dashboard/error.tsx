'use client'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-dark-950">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-dark-400 mb-8">
          {error?.message || 'Failed to load dashboard'}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
