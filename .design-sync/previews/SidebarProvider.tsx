import {
  Badge,
  Icons,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "sosek-system"

const nav = [
  { label: "Dashboard", icon: Icons.LayoutDashboard, active: true },
  { label: "Projects", icon: Icons.Folder, badge: "12" },
  { label: "Inbox", icon: Icons.Inbox, badge: "3" },
  { label: "Calendar", icon: Icons.Calendar },
  { label: "Settings", icon: Icons.Settings },
]

export const AppShell = () => (
  <SidebarProvider className="min-h-0 h-[420px] overflow-hidden rounded-lg border">
    <Sidebar collapsible="none">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1 font-semibold">
          <Icons.Sparkles className="size-4" /> Sosek Studio
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((n) => (
                <SidebarMenuItem key={n.label}>
                  <SidebarMenuButton isActive={n.active}>
                    <n.icon /> <span>{n.label}</span>
                  </SidebarMenuButton>
                  {n.badge && <SidebarMenuBadge>{n.badge}</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Icons.User /> <span>Jane Kowalska</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    <SidebarInset>
      <header className="flex h-12 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <span className="text-sm font-medium">Dashboard</span>
        <Badge variant="secondary" className="ml-auto">Pro</Badge>
      </header>
      <div className="grid grid-cols-3 gap-4 p-4">
        {["Revenue", "Users", "Orders"].map((k) => (
          <div key={k} className="h-24 rounded-lg bg-muted p-3 text-sm text-muted-foreground">{k}</div>
        ))}
      </div>
    </SidebarInset>
  </SidebarProvider>
)
