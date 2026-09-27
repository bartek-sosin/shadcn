import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Icons,
} from "sosek-system"

export const AccountMenu = () => (
  <div className="flex justify-center pt-2">
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Jane Kowalska</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icons.User /> Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icons.CreditCard /> Billing <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icons.Settings /> Team settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Email notifications</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Icons.LogOut /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)
