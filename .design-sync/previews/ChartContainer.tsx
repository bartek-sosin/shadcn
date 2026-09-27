import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  Recharts,
  type ChartConfig,
} from "sosek-system"

const { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, Pie, PieChart } = Recharts

const data = [
  { month: "Apr", desktop: 186, mobile: 80 },
  { month: "May", desktop: 305, mobile: 200 },
  { month: "Jun", desktop: 237, mobile: 120 },
  { month: "Jul", desktop: 173, mobile: 190 },
  { month: "Aug", desktop: 209, mobile: 130 },
  { month: "Sep", desktop: 264, mobile: 140 },
]

const config = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

export const BarChartDemo = () => (
  <ChartContainer config={config} className="h-56 w-full max-w-md">
    <BarChart data={data} accessibilityLayer>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} isAnimationActive={false} />
      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} isAnimationActive={false} />
    </BarChart>
  </ChartContainer>
)

export const LineChartDemo = () => (
  <ChartContainer config={config} className="h-56 w-full max-w-md">
    <LineChart data={data} margin={{ left: 12, right: 12 }}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Line dataKey="desktop" type="monotone" stroke="var(--color-desktop)" strokeWidth={2} dot={false} isAnimationActive={false} />
      <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} isAnimationActive={false} />
    </LineChart>
  </ChartContainer>
)

const share = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 110, fill: "var(--color-firefox)" },
]
const shareConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-3)" },
  firefox: { label: "Firefox", color: "var(--chart-5)" },
} satisfies ChartConfig

export const PieChartDemo = () => (
  <ChartContainer config={shareConfig} className="aspect-square h-56">
    <PieChart>
      <ChartTooltip content={<ChartTooltipContent hideLabel />} />
      <Pie data={share} dataKey="visitors" nameKey="browser" innerRadius={50} isAnimationActive={false} />
      <ChartLegend content={<ChartLegendContent nameKey="browser" />} />
    </PieChart>
  </ChartContainer>
)
