import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "sosek-system"

export const Layout = () => (
  <ResizablePanelGroup orientation="horizontal" className="min-h-48 max-w-md rounded-lg border">
    <ResizablePanel defaultSize="30%">
      <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Sidebar</div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize="70%">
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel defaultSize="60%">
          <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Editor</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="40%">
          <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Terminal</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
)
