import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "sosek-system"

export const Default = () => (
  <TooltipProvider>
    <div className="flex justify-center pt-12">
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Share</Button>
        </TooltipTrigger>
        <TooltipContent>Copy a link to this page</TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
)
