import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { IconFileDownload } from "@tabler/icons-react"
import { Switch } from "../ui/switch"

export function SiteHeader() {
    const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") setDark(true)
  }, [])

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-base font-medium">Theme</h1>
        <div className="ml-auto flex items-center gap-2">
          {/* <Button variant="ghost" size="sm" className="hidden sm:flex">
           <IconFileDownload size={44} stroke={2}/>
           <h1 className="text-md font-serif font-bold">Download</h1>
          </Button> */}
           <Switch onClick={() => setDark(!dark)}  className="data-[state=unchecked]:bg-blue-500"/>
        </div>
      </div>
    </header>
  )
}
