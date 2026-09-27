import { Label, RadioGroup, RadioGroupItem } from "sosek-system"

export const Default = () => (
  <RadioGroup defaultValue="monthly">
    <div className="flex items-center gap-2">
      <RadioGroupItem value="monthly" id="r1" />
      <Label htmlFor="r1">Monthly — $12 / month</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="yearly" id="r2" />
      <Label htmlFor="r2">Yearly — $120 / year</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="lifetime" id="r3" disabled />
      <Label htmlFor="r3">Lifetime (sold out)</Label>
    </div>
  </RadioGroup>
)
