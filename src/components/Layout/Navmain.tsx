
import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocation, useNavigate } from "react-router"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ElementType
  }[]
}) {
  const currlocation=useLocation().pathname.split('/').pop();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="flex flex-col gap-3">
          {items.map((item) => {
            const Icon = item.icon
            const navigate=useNavigate();
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton onClick={()=>navigate(`/${item.url}`)} className={(item.url==currlocation)?"bg-primary text-primary-foreground":""}>
                  {Icon && <Icon className="size-4" />}
                  <span className="text-lg">{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>

      </SidebarGroupContent>
    </SidebarGroup>
  )
}