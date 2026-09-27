import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "sosek-system"

export const NoProjects = () => (
  <Empty className="w-full max-w-md border border-dashed">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <span className="text-lg">📁</span>
      </EmptyMedia>
      <EmptyTitle>No projects yet</EmptyTitle>
      <EmptyDescription>Create your first project to start designing with Sosek System.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div className="flex gap-2">
        <Button>Create project</Button>
        <Button variant="outline">Import</Button>
      </div>
    </EmptyContent>
  </Empty>
)
