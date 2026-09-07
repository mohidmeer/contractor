"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  ClipboardList,
  Inbox,
  Wrench,
  FolderKanban,
  Settings,
  Tags,
  LayoutTemplate,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteName } from "@/data";

const links = [
  { href: "/admin/estimates", label: "Estimates", icon: ClipboardList },
  { href: "/admin/requests", label: "Requests", icon: Inbox },
  { href: "/admin/categories", label: "Categories", icon: Tags },
  { href: "/admin/services", label: "Services", icon: Wrench },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/blogs", label: "Blogs", icon: FileText },
  { href: "/admin/site-content", label: "Site Content", icon: LayoutTemplate },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-14 w-full shrink-0 flex-row items-stretch border-b bg-card md:h-full md:w-56 md:flex-col md:border-b-0 md:border-r">
      <div className="hidden shrink-0 border-b px-4 py-4 md:block">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Admin
        </p>
        <p className="truncate text-sm font-semibold">{siteName}</p>
      </div>
      <nav className="flex min-w-0 flex-1 gap-1 overflow-x-auto p-2 md:flex-col md:overflow-y-auto md:overflow-x-hidden">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="whitespace-nowrap">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
