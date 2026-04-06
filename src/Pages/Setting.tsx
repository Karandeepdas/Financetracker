import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export function SettingsCard() {
  return (
    <Card className="min-h-[300px] flex flex-col items-center justify-center bg-transparent border-0 shadow-none ring-0 outline-none">

      <CardHeader className="text-center">
        <CardTitle>Settings</CardTitle>

        <CardDescription>
          We're working on this feature.Updates coming soon.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center gap-6">

        {/* Animation merged here */}
        <div className="wrapper">
            <div className="circle"></div>
              <div className="circle"></div>
             <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
           <div className="shadow"></div>
          </div>

        <p className="text-muted-foreground text-xl font-bold">
          We are building something awesome 🚀
        </p>

      </CardContent>

    </Card>
  )
}