import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "sosek-system"

export const Repositories = () => (
  <Collapsible defaultOpen className="flex w-full max-w-sm flex-col gap-2">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold">@jane starred 3 repositories</p>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm">
          Toggle
        </Button>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border px-4 py-2 text-sm">sosek/design-system</div>
    <CollapsibleContent className="flex flex-col gap-2">
      <div className="rounded-md border px-4 py-2 text-sm">sosek/marketing-site</div>
      <div className="rounded-md border px-4 py-2 text-sm">sosek/api-client</div>
    </CollapsibleContent>
  </Collapsible>
)
