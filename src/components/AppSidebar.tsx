import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  DollarSign,
  Code2,
  Wrench,
  Warehouse,
  Package,
  Users,
  BarChart3,
  FileSearch,
  Calendar,
  Megaphone,
  Monitor,
  Target,
  ListTodo,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Task Management", url: "/tasks", icon: ListTodo },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Bid Management", url: "/bids", icon: FileText },
  { title: "Sales & CRM", url: "/sales", icon: DollarSign },
  { title: "Software Dev", url: "/development", icon: Code2 },
  { title: "Service & Maintenance", url: "/service", icon: Wrench },
  { title: "Warehouse & Inventory", url: "/inventory", icon: Warehouse },
  { title: "Inventory Portal", url: "/inventory-portal", icon: Package },
  { title: "Resource Planning", url: "/resources", icon: Users },
  { title: "Financial Analytics", url: "/financials", icon: BarChart3 },
  { title: "Document Control", url: "/documents", icon: FileSearch },
  { title: "Meetings", url: "/meetings", icon: Calendar },
  { title: "Marketing", url: "/marketing", icon: Megaphone },
  { title: "IT Support", url: "/support", icon: Monitor },
  { title: "Strategic Planning", url: "/strategy", icon: Target },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold tracking-wider uppercase text-sidebar-foreground/50 px-3 py-2">
            ETEC Services
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    isActive={location.pathname === item.url}
                    className="gap-3"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3 border-t border-sidebar-border">
        <div className="text-xs text-sidebar-foreground/60 truncate mb-2">
          {user?.email}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2 text-sidebar-foreground/70 hover:text-sidebar-foreground"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
