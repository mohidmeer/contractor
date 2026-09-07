"use client";

import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { siteName } from "@/data";
import { Button } from "@/components/ui/button";

const titles: Record<string, { title: string; description?: string }> = {
  "/admin/estimates": {
    title: "Estimates",
    description: "Create and manage client estimates",
  },
  "/admin/requests": {
    title: "Requests",
    description: "Form submissions and inbound leads",
  },
  "/admin/categories": {
    title: "Categories",
    description: "Organize services by category",
  },
  "/admin/services": {
    title: "Services",
    description: "Manage service pages and listings",
  },
  "/admin/projects": {
    title: "Projects",
    description: "Manage project portfolio",
  },
  "/admin/blogs": {
    title: "Blogs",
    description: "Write and publish blog posts",
  },
  "/admin/site-content": {
    title: "Site Content",
    description: "Marketing copy, contact info, hero, FAQs, and more",
  },
  "/admin/settings": {
    title: "Settings",
    description: "API keys, email, and chatbot settings",
  },
};

function resolveMeta(pathname: string) {
  const match = Object.keys(titles)
    .sort((a, b) => b.length - a.length)
    .find((key) => pathname === key || pathname.startsWith(`${key}/`));
  if (match) return titles[match];
  return { title: "Admin", description: siteName };
}

export default function AdminTopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const meta = resolveMeta(pathname);

  const signOut = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      toast.success("Signed out");
      router.replace("/admin/login");
      router.refresh();
    } catch {
      toast.error("Sign out failed");
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border/70 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-6">
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold tracking-tight">
          {meta.title}
        </p>
        {meta.description ? (
          <p className="hidden truncate text-xs text-muted-foreground sm:block">
            {meta.description}
          </p>
        ) : null}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <p className="hidden text-xs text-muted-foreground md:block">
          {siteName}
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 gap-1.5"
          onClick={() => void signOut()}
        >
          <LogOut className="h-3.5 w-3.5" />
          Sign out
        </Button>
      </div>
    </header>
  );
}
