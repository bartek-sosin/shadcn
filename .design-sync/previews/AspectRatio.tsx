import { AspectRatio } from "sosek-system"

export const Ratios = () => (
  <div className="grid w-full max-w-md grid-cols-2 items-start gap-4">
    <div>
      <AspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
        16 : 9
      </AspectRatio>
    </div>
    <div>
      <AspectRatio ratio={1} className="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
        1 : 1
      </AspectRatio>
    </div>
  </div>
)
