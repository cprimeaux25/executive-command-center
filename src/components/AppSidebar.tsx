import {
  LayoutDashboard, CheckSquare, FolderKanban, FileText, TrendingUp, Code2,
  Wrench, Warehouse, Users, DollarSign, Archive,
  Calendar, Megaphone, Headphones, Target
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Executive Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Task Management", url: "/tasks", icon: CheckSquare },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Bid & RFP Management", url: "/bids", icon: FileText },
  { title: "Sales Operations", url: "/sales", icon: TrendingUp },
  { title: "Software Development", url: "/development", icon: Code2 },
  { title: "Service & Maintenance", url: "/service", icon: Wrench },
  { title: "Warehouse & Inventory", url: "/inventory", icon: Warehouse },
  { title: "Resource Planning", url: "/resources", icon: Users },
  { title: "Financial Analytics", url: "/financials", icon: DollarSign },
  { title: "Document Control", url: "/documents", icon: Archive },
  { title: "Meetings & Comms", url: "/meetings", icon: Calendar },
  { title: "Marketing", url: "/marketing", icon: Megaphone },
  { title: "IT Support", url: "/support", icon: Headphones },
  { title: "Strategic Planning", url: "/strategy", icon: Target },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm shrink-0">
            ET
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-sidebar-foreground">ETEC</span>
              <span className="text-[10px] text-sidebar-foreground/60">Management Portal</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = item.url === "/" ? location.pathname === "/" : location.pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <NavLink to={item.url} end={item.url === "/"}>
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
