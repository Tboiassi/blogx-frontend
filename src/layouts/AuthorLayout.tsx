import { Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  PenSquare,
  User,
} from "lucide-react";
import { Sidebar, type SidebarItem } from "../components/layout/Sidebar";
import { DashboardHeader } from "../components/layout/DashboardHeader";

const authorItems: SidebarItem[] = [
  {
    label: "Overview",
    path: "/author",
    icon: LayoutDashboard,
  },
  {
    label: "My Articles",
    path: "/author/articles",
    icon: FileText,
  },
  {
    label: "Create Article",
    path: "/author/articles/new",
    icon: PenSquare,
  },
  {
    label: "Profile",
    path: "/author/profile",
    icon: User,
  },
];

export function AuthorLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--color-background)]">
      <Sidebar title="Author workspace" items={authorItems} />

      <div className="min-w-0 flex-1">
        <DashboardHeader
          title="Author Dashboard"
          description="Manage your writing and publications"
        />

        <main className="p-5 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
