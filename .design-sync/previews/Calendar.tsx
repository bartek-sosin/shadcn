import { Calendar } from "sosek-system"

export const Single = () => (
  <Calendar
    mode="single"
    defaultMonth={new Date(2026, 8, 1)}
    selected={new Date(2026, 8, 17)}
    className="rounded-lg border"
  />
)

export const Range = () => (
  <Calendar
    mode="range"
    defaultMonth={new Date(2026, 8, 1)}
    selected={{ from: new Date(2026, 8, 8), to: new Date(2026, 8, 14) }}
    className="rounded-lg border"
  />
)
