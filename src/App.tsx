
import { AppSidebar } from "./components/Layout/Sidebar"
import { SidebarProvider ,SidebarInset, Sidebar, SidebarContent } from "./components/ui/sidebar"
import Analytics from "./Pages/Insight"
import { Route ,Routes } from "react-router"
import { Overview } from "./Pages/Overview"
import { SiteHeader } from "./components/Layout/Header"
import { Datatable } from "./components/Transactions/Datatablenew"
import { BugReportForm } from "./Pages/Help"
import { SettingsCard } from "./Pages/Setting"
function App() {
  return (
    <SidebarProvider
     style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
    <div className="flex h-screen w-full">

      
     <AppSidebar variant="inset"/>
     <SidebarInset className="h-full overflow-y-auto">
     
      <SiteHeader/>
      <div className="flex flex-1 flex-col w-full">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <Routes>
          <Route path='/transaction' element={<Datatable/>}/>
          <Route path='/' element={<Analytics/>}/>
          <Route path='/overview' element={<Overview/>}/>
          <Route path='/setting' element={<SettingsCard/>}/>
          <Route path='/help' element={<BugReportForm/>}/>
        </Routes>
        </div>
        </div>
        </div>
      </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default App