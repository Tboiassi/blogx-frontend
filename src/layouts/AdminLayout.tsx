import { Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Folder,
  Users,
  User,
} from "lucide-react";
import { Sidebar, type SidebarItem } from "../components/layout/Sidebar";
import { DashboardHeader } from "../components/layout/DashboardHeader";

const adminItems: SidebarItem[] = [
  {
    label: "Overview",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Articles",
    path: "/admin/articles",
    icon: FileText,
  },
  {
    label: "Categories",
    path: "/admin/categories",
    icon: Folder,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    label: "Profile",
    path: "/admin/profile",
    icon: User,
  },
];

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--color-background)]">
      <Sidebar title="Administration" items={adminItems} />

      <div className="min-w-0 flex-1">
        <DashboardHeader
          title="Admin Dashboard"
          description="Manage the BlogX platform"
        />

        <main className="p-5 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}