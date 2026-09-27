import { Kbd, KbdGroup } from "sosek-system"

export const Shortcuts = () => (
  <div className="flex flex-col gap-3 text-sm">
    <div className="flex items-center gap-2">
      Search <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
    </div>
    <div className="flex items-center gap-2">
      Save <KbdGroup><Kbd>Ctrl</Kbd><Kbd>S</Kbd></KbdGroup>
    </div>
    <div className="flex items-center gap-2">
      Close <Kbd>Esc</Kbd>
    </div>
  </div>
)
