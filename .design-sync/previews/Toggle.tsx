import { Toggle } from "sosek-system"

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Toggle aria-label="Bold" defaultPressed>
      <span className="font-bold">B</span>
    </Toggle>
    <Toggle aria-label="Italic">
      <span className="italic">I</span>
    </Toggle>
    <Toggle variant="outline" defaultPressed>
      Bookmark
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
