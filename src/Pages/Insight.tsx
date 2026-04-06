import { Card, CardHeader, CardDescription,CardTitle ,CardAction, CardFooter} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartBarMultiple } from "@/components/Dashboard/Barchart";
import { ChartPieDonutText } from "@/components/Dashboard/Piechart";
export default function Analytics(){
    return (
        <div className="grid grid-cols-3 gap-8 px-4 ">
            <Card className="col-span-1 bg-gradient-to-tr from-card via-card from-card shadow-xl">
                <CardHeader>
                  <CardDescription>Max Expanse</CardDescription>
                 <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                     $145.00
                </CardTitle>
                <CardAction>
                <Badge variant="outline" className="text-xl px-2">
                  +12.5%
                 </Badge>
                </CardAction>
                </CardHeader>
                <CardFooter className="bg-transparent border-none pt-1">
                  <h1 className="text-sm font-bold">in Electricity</h1>
                </CardFooter>
            </Card>
             <Card className="col-span-1 bg-gradient-to-tr from-card via-card from-card shadow-xl">
                <CardHeader>
                  <CardDescription>Min Expanse</CardDescription>
                 <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                     $5.00
                </CardTitle>
                <CardAction>
                <Badge variant="outline" className="text-xl px-2">
                  +0.5%
                 </Badge>
                </CardAction>
                </CardHeader>
                 <CardFooter className="bg-transparent border-none pt-1">
                  <h1 className="text-sm font-bold">in Pencil</h1>
                </CardFooter>
            </Card>
             <Card className="col-span-1 bg-gradient-to-tr from-card via-card from-card shadow-xl">
                <CardHeader>
                  <CardDescription>This Month</CardDescription>
                 <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                     $1,250.00
                </CardTitle>
                </CardHeader>
                <CardFooter className="bg-transparent border-none pt-1">
                  <h1 className="text-sm font-bold">Items 15</h1>
                </CardFooter>
            </Card>
            <ChartBarMultiple className="col-span-2 shadow-xl"/>
           <ChartPieDonutText className="col-span-1 shadow-xl"/>
        </div>
    )
}