import { Progress } from "sosek-system"

export const Values = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Uploading assets</span>
        <span className="text-muted-foreground">66%</span>
      </div>
      <Progress value={66} />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Storage used</span>
        <span className="text-muted-foreground">9.1 of 10 GB</span>
      </div>
      <Progress value={91} />
    </div>
  </div>
)
