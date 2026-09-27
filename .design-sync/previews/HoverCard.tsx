import { Avatar, AvatarFallback, Button, HoverCard, HoverCardContent, HoverCardTrigger } from "sosek-system"

export const Profile = () => (
  <div className="flex justify-center pt-2">
    <HoverCard defaultOpen>
      <HoverCardTrigger asChild>
        <Button variant="link">@sosek</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">Sosek Studio</p>
            <p className="text-sm">Design systems and product UI, built on shadcn/ui.</p>
            <p className="text-xs text-muted-foreground">Joined March 2024</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
)
