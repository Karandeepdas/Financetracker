
import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", income: 222, expanse: 150 },
  { date: "2024-04-02", income: 97, expanse: 180 },
  { date: "2024-04-03", income: 167, expanse: 120 },
  { date: "2024-04-04", income: 242, expanse: 260 },
  { date: "2024-04-05", income: 373, expanse: 290 },
  { date: "2024-04-06", income: 301, expanse: 340 },
  { date: "2024-04-07", income: 245, expanse: 180 },
  { date: "2024-04-08", income: 409, expanse: 320 },
  { date: "2024-04-09", income: 59, expanse: 110 },
  { date: "2024-04-10", income: 261, expanse: 190 },
  { date: "2024-04-11", income: 327, expanse: 350 },
  { date: "2024-04-12", income: 292, expanse: 210 },
  { date: "2024-04-13", income: 342, expanse: 380 },
  { date: "2024-04-14", income: 137, expanse: 220 },
  { date: "2024-04-15", income: 120, expanse: 170 },
  { date: "2024-04-16", income: 138, expanse: 190 },
  { date: "2024-04-17", income: 446, expanse: 360 },
  { date: "2024-04-18", income: 364, expanse: 410 },
  { date: "2024-04-19", income: 243, expanse: 180 },
  { date: "2024-04-20", income: 89, expanse: 150 },
  { date: "2024-04-21", income: 137, expanse: 200 },
  { date: "2024-04-22", income: 224, expanse: 170 },
  { date: "2024-04-23", income: 138, expanse: 230 },
  { date: "2024-04-24", income: 387, expanse: 290 },
  { date: "2024-04-25", income: 215, expanse: 250 },
  { date: "2024-04-26", income: 75, expanse: 130 },
  { date: "2024-04-27", income: 383, expanse: 420 },
  { date: "2024-04-28", income: 122, expanse: 180 },
  { date: "2024-04-29", income: 315, expanse: 240 },
  { date: "2024-04-30", income: 454, expanse: 380 },
  { date: "2024-05-01", income: 165, expanse: 220 },
  { date: "2024-05-02", income: 293, expanse: 310 },
  { date: "2024-05-03", income: 247, expanse: 190 },
  { date: "2024-05-04", income: 385, expanse: 420 },
  { date: "2024-05-05", income: 481, expanse: 390 },
  { date: "2024-05-06", income: 498, expanse: 520 },
  { date: "2024-05-07", income: 388, expanse: 300 },
  { date: "2024-05-08", income: 149, expanse: 210 },
  { date: "2024-05-09", income: 227, expanse: 180 },
  { date: "2024-05-10", income: 293, expanse: 330 },
  { date: "2024-05-11", income: 335, expanse: 270 },
  { date: "2024-05-12", income: 197, expanse: 240 },
  { date: "2024-05-13", income: 197, expanse: 160 },
  { date: "2024-05-14", income: 448, expanse: 490 },
  { date: "2024-05-15", income: 473, expanse: 380 },
  { date: "2024-05-16", income: 338, expanse: 400 },
  { date: "2024-05-17", income: 499, expanse: 420 },
  { date: "2024-05-18", income: 315, expanse: 350 },
  { date: "2024-05-19", income: 235, expanse: 180 },
  { date: "2024-05-20", income: 177, expanse: 230 },
  { date: "2024-05-21", income: 82, expanse: 140 },
  { date: "2024-05-22", income: 81, expanse: 120 },
  { date: "2024-05-23", income: 252, expanse: 290 },
  { date: "2024-05-24", income: 294, expanse: 220 },
  { date: "2024-05-25", income: 201, expanse: 250 },
  { date: "2024-05-26", income: 213, expanse: 170 },
  { date: "2024-05-27", income: 420, expanse: 460 },
  { date: "2024-05-28", income: 233, expanse: 190 },
  { date: "2024-05-29", income: 78, expanse: 130 },
  { date: "2024-05-30", income: 340, expanse: 280 },
  { date: "2024-05-31", income: 178, expanse: 230 },
  { date: "2024-06-01", income: 178, expanse: 200 },
  { date: "2024-06-02", income: 470, expanse: 410 },
  { date: "2024-06-03", income: 103, expanse: 160 },
  { date: "2024-06-04", income: 439, expanse: 380 },
  { date: "2024-06-05", income: 88, expanse: 140 },
  { date: "2024-06-06", income: 294, expanse: 250 },
  { date: "2024-06-07", income: 323, expanse: 370 },
  { date: "2024-06-08", income: 385, expanse: 320 },
  { date: "2024-06-09", income: 438, expanse: 480 },
  { date: "2024-06-10", income: 155, expanse: 200 },
  { date: "2024-06-11", income: 92, expanse: 150 },
  { date: "2024-06-12", income: 492, expanse: 420 },
  { date: "2024-06-13", income: 81, expanse: 130 },
  { date: "2024-06-14", income: 426, expanse: 380 },
  { date: "2024-06-15", income: 307, expanse: 350 },
  { date: "2024-06-16", income: 371, expanse: 310 },
  { date: "2024-06-17", income: 475, expanse: 520 },
  { date: "2024-06-18", income: 107, expanse: 170 },
  { date: "2024-06-19", income: 341, expanse: 290 },
  { date: "2024-06-20", income: 408, expanse: 450 },
  { date: "2024-06-21", income: 169, expanse: 210 },
  { date: "2024-06-22", income: 317, expanse: 270 },
  { date: "2024-06-23", income: 480, expanse: 530 },
  { date: "2024-06-24", income: 132, expanse: 180 },
  { date: "2024-06-25", income: 141, expanse: 190 },
  { date: "2024-06-26", income: 434, expanse: 380 },
  { date: "2024-06-27", income: 448, expanse: 490 },
  { date: "2024-06-28", income: 149, expanse: 200 },
  { date: "2024-06-29", income: 103, expanse: 160 },
  { date: "2024-06-30", income: 446, expanse: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  income: {
    label: "income",
    color: "var(--chart-1)",
  },
  expanse: {
    label: "expanse",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("30d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 30
    if (timeRange === "15d") {
      daysToSubtract = 15
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card shadow-xl">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart for expanses</CardTitle>
          <CardDescription>
            Select Appropriate interval 
          </CardDescription>
        </div>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:px-4! @[767px]/card:flex"
          >
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="15d">Last 15 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 15 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillincome" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillexpanse" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expanse)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expanse)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="expanse"
              type="natural"
              fill="url(#fillexpanse)"
              stroke="var(--color-expanse)"
              stackId="a"
            />
            <Area
              dataKey="income"
              type="natural"
              fill="url(#fillincome)"
              stroke="var(--color-income)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
