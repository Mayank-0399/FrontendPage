export default function DashboardLoading() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-dark-950">
      <div className="hidden md:block w-72 bg-dark-900 border-r border-dark-700" />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-dark-800 rounded-xl h-48 border border-dark-700 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
