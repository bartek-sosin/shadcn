import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "sosek-system"

export const Palette = () => (
  <Command className="w-full max-w-sm rounded-xl border">
    <CommandInput placeholder="Type a command or search…" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>New project</CommandItem>
        <CommandItem>Invite teammate</CommandItem>
        <CommandItem>Open billing</CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>
          Profile <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          Keyboard shortcuts <CommandShortcut>⌘/</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
)
