import { Skeleton } from "sosek-system"

export const ProfileRow = () => (
  <div className="flex items-center gap-4">
    <Skeleton className="size-12 rounded-full" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-32" />
    </div>
  </div>
)

export const CardPlaceholder = () => (
  <div className="flex w-full max-w-xs flex-col gap-3">
    <Skeleton className="h-32 w-full rounded-xl" />
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>
)
