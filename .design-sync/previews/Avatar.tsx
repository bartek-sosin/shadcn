import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from "sosek-system"

export const Sizes = () => (
  <div className="flex items-center gap-3">
    <Avatar size="sm">
      <AvatarFallback>JK</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>MN</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>AW</AvatarFallback>
    </Avatar>
  </div>
)

export const WithBadge = () => (
  <Avatar size="lg">
    <AvatarFallback>JK</AvatarFallback>
    <AvatarBadge />
  </Avatar>
)

export const Group = () => (
  <AvatarGroup>
    <Avatar>
      <AvatarFallback>JK</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>MN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>AW</AvatarFallback>
    </Avatar>
    <AvatarGroupCount>+5</AvatarGroupCount>
  </AvatarGroup>
)
