import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "sosek-system"

export const Variants = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Two-factor authentication</ItemTitle>
        <ItemDescription>Add an extra layer of security to your account.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">Enable</Button>
      </ItemActions>
    </Item>
    <Item variant="muted" size="sm">
      <ItemContent>
        <ItemTitle>Your profile is 80% complete</ItemTitle>
      </ItemContent>
      <ItemActions>
        <Badge variant="secondary">Tip</Badge>
      </ItemActions>
    </Item>
  </div>
)

export const MemberList = () => (
  <ItemGroup className="w-full max-w-md rounded-lg border">
    {[
      ["JK", "Jane Kowalska", "jane@sosek.app", "Owner"],
      ["MN", "Marek Nowak", "marek@sosek.app", "Editor"],
      ["AW", "Anna Wiśniewska", "anna@sosek.app", "Viewer"],
    ].map(([initials, name, email, role], i) => (
      <div key={email}>
        {i > 0 && <ItemSeparator />}
        <Item>
          <ItemMedia>
            <Avatar>
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{name}</ItemTitle>
            <ItemDescription>{email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="outline">{role}</Badge>
          </ItemActions>
        </Item>
      </div>
    ))}
  </ItemGroup>
)
