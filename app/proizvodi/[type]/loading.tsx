import { Skeleton } from "@/components/ui/skeleton"

export default function ProductPageLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <div className="relative min-h-[55vh] flex items-end overflow-hidden bg-muted">
        <Skeleton className="absolute inset-0 rounded-none" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
          <Skeleton className="mb-6 h-4 w-40" />
          <Skeleton className="mb-2 h-4 w-32" />
          <Skeleton className="h-12 w-[70%] max-w-3xl" />
          <Skeleton className="mt-4 h-6 w-[50%] max-w-xl" />
        </div>
      </div>

      {/* Features strip skeleton */}
      <div className="border-b border-border bg-secondary py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <Skeleton className="h-12 w-12 shrink-0 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid skeleton */}
      <div className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Skeleton className="mx-auto mb-2 h-4 w-20" />
            <Skeleton className="mx-auto h-10 w-64" />
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-border bg-card">
                <Skeleton className="aspect-[4/3] w-full rounded-none" />
                <div className="space-y-3 p-6">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="mt-4 h-10 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
