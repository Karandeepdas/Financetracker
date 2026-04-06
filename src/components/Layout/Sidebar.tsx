import {
  IconChartBar,
  IconDashboard,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
  IconFolder,
  IconCirclePlusFilled, IconMail,
  IconSettings
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import Logo from "./../../assets/Logo.png"
import { NavMain } from "./Navmain"
import { NavUser } from "./Navuser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent
} from "@/components/ui/sidebar"
const user={
    name: "Karandeep",
    email: "karandeepdas6@gmail.com",
}
const items=[
    {
      title: "Overview",
      url: "overview",
      icon: IconDashboard,
    },
    {
      title: "Transaction",
      url: "transaction",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "",
      icon: IconChartBar,
    },
    {
      title:"Setting",
      url:"setting",
      icon:IconSettings,
    },
    {
      title: "Help",
      url: "help",
      icon: IconFolder,
    }
  ]
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
 <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5"
            >
              <a href="#">
                <img src={Logo} alt="logo" className="h-10 w-10"/>
                <span className="text-base font-semibold text-xl">Zorvyn</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex flex-col h-full">
       <NavMain items={items} />
        <div className="mt-auto">
         <NavUser user={user} className="mt-auto" />
        </div>
      </SidebarContent>
       {/* <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}