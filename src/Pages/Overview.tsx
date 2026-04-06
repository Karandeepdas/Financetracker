import { SectionCards } from "@/components/Dashboard/Summarycard"
import { ChartAreaInteractive } from "@/components/Dashboard/Areachart"

export function Overview(){
    return (
      <div>
        <SectionCards/>
         <div className="px-4 lg:px-6 py-6">
            <ChartAreaInteractive/>
         </div>
      </div>
    )
}