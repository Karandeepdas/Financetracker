
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", Income: 186, Expanse: 80 },
  { month: "February", Income: 305, Expanse: 200 },
  { month: "March", Income: 237, Expanse: 120 },
  { month: "April", Income: 73, Expanse: 190 },
  { month: "May", Income: 209, Expanse: 130 },
  { month: "June", Income: 214, Expanse: 140 },
]

const chartConfig = {
  Income: {
    label: "Income",
    color: "var(--chart-1)",
  },
  Expanse: {
    label: "Expanse",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

export function ChartBarMultiple({className}:{
    className?:string
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Bar Chart of Expanse and Earning</CardTitle>
        <CardDescription>Last Six months data</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Income" fill="var(--chart-1)" radius={4}/>
            <Bar dataKey="Expanse" fill="var(--chart-4)" radius={4}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  )
}
