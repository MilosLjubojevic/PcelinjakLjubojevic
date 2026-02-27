import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPostLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <div className="relative flex min-h-[55vh] items-end overflow-hidden bg-muted">
        <Skeleton className="absolute inset-0 rounded-none" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
          <Skeleton className="mb-6 h-4 w-36" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-24 rounded-sm" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="mt-4 h-12 w-[80%] max-w-3xl" />
          <Skeleton className="mt-4 h-6 w-[60%] max-w-xl" />
        </div>
      </div>

      {/* Article body skeleton */}
      <div className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          {/* Lead paragraph */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-[95%]" />
            <Skeleton className="h-5 w-[85%]" />
          </div>

          {/* Content paragraphs */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[92%]" />
              <Skeleton className="h-4 w-[88%]" />
              <Skeleton className="h-4 w-[75%]" />
            </div>
          ))}
        </div>

        {/* Image gallery skeleton */}
        <div className="mx-auto mt-12 mb-12 max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Skeleton className="aspect-4/3 w-full rounded-2xl" />
            <Skeleton className="aspect-4/3 w-full rounded-2xl" />
          </div>
        </div>

        {/* More content */}
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
