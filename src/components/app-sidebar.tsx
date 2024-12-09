import {
  Home,
  Users,
  NotebookPen,
  Megaphone,
  UserPen,
  PowerIcon,
  MessageCircleQuestionIcon,
  CalendarRange,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const projects = [
  {
    url: "#",
    icon: Home,
    name: "Inicio",
  },
  {
    url: "#",
    icon: Users,
    name: "Estudiantes",
  },
  {
    url: "#",
    icon: NotebookPen,
    name: "Examenes",
  },
  {
    url: "#",
    icon: Megaphone,
    name: "Anuncios",
  },
  {
    url: "#",
    icon: CalendarRange,
    name: "Eventos",
  },
];

// Menu Config
const config = [
  {
    url: "#",
    icon: UserPen,
    name: "Mi Cuenta",
  },

  {
    url: "#",
    icon: MessageCircleQuestionIcon,
    name: "Ayuda",
  },
  {
    url: "#",
    icon: PowerIcon,
    name: "Cerrar Session",
  },
];
export function AppSidebar() {
  return (
    <Sidebar className="w-64 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-[18px] font-bold mb-6 text-black dark:text-white ">
            <img
              src="/logoAdmin.png"
              alt="ProctorGuard"
              width={25}
              height={25}
              className="m-1"
            />
            ProctorGuard
          </SidebarGroupLabel>
          <SidebarGroupLabel className="px-4 py-2 text-[18px] font-semibold mb-2">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild>
                    <a
                      href={project.url}
                      className="flex items-center gap-4 px-4 py-3 transition-all rounded-lg"
                    >
                      <project.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {project.name}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-[18px] font-semibold mb-2">
            Configuración
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {config.map((config) => (
                <SidebarMenuItem key={config.name}>
                  <SidebarMenuButton asChild>
                    <a
                      href={config.url}
                      className="flex items-center gap-4 px-4 py-3 transition-all rounded-lg"
                    >
                      <config.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{config.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
