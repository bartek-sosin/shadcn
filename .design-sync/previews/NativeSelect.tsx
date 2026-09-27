import { Label, NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "sosek-system"

export const Default = () => (
  <div className="flex flex-col gap-2">
    <Label htmlFor="country">Country</Label>
    <NativeSelect id="country" defaultValue="pl">
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="pl">Poland</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="America">
        <NativeSelectOption value="us">United States</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  </div>
)

export const SizesAndStates = () => (
  <div className="flex flex-wrap items-center gap-3">
    <NativeSelect size="sm" defaultValue="10">
      <NativeSelectOption value="10">10 per page</NativeSelectOption>
      <NativeSelectOption value="25">25 per page</NativeSelectOption>
    </NativeSelect>
    <NativeSelect disabled>
      <NativeSelectOption>Disabled</NativeSelectOption>
    </NativeSelect>
  </div>
)
