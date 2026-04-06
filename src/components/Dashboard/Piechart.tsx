
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
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
import { Table, TableBody, TableCell, TableRow } from "../ui/table"

export const description = "A donut chart with text"

const chartData = [
  { browser: "Potato", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "carrot", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Electricity", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Expanses",
  },
  chrome: {
    label: "Potato",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Carrot",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Electricity",
    color: "var(--chart-3)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieDonutText({className}:{
    className?:string
}) {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className={cn("flex flex-col",className)}>
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart most bought category</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[250px] w-[250px] mb-0"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              outerRadius={100} 
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm pt-2 pb-2">
       <Table>
        <TableBody>
            { chartData.map((item,idx)=>(
                 <TableRow className={item.browser} key={idx}>
                    <TableCell><div style={{ backgroundColor: item.fill }}>30%</div></TableCell>
                    <TableCell >{item.browser}</TableCell>
                     <TableCell >{item.visitors}</TableCell>
                 </TableRow>
                )   
                )}
        </TableBody>
       </Table>
      </CardFooter>
    </Card>
  )
}
