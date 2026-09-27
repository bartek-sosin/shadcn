import { Button, Spinner } from "sosek-system"

export const Default = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Spinner />
    <Spinner className="size-6" />
    <Button disabled>
      <Spinner /> Saving…
    </Button>
    <span className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner /> Loading projects
    </span>
  </div>
)
