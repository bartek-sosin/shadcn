import { Icons, Toggle } from "sosek-system"

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Toggle aria-label="Star" defaultPressed>
      <Icons.Star />
    </Toggle>
    <Toggle aria-label="Heart">
      <Icons.Heart />
    </Toggle>
    <Toggle variant="outline" defaultPressed>
      <Icons.Bookmark /> Bookmark
    </Toggle>
    <Toggle variant="outline">Favorite</Toggle>
    <Toggle disabled>Disabled</Toggle>
  </div>
)

export const Sizes = () => (
  <div className="flex items-center gap-2">
    <Toggle variant="outline" size="sm">Small</Toggle>
    <Toggle variant="outline">Default</Toggle>
    <Toggle variant="outline" size="lg">Large</Toggle>
  </div>
)
