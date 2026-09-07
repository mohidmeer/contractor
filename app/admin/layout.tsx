import { headers } from "next/headers";
import { siteName } from "@/data";
import "./admin.css";
import AdminSidebar from "./_components/AdminSidebar";
import AdminTopBar from "./_components/AdminTopBar";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: `Admin | ${siteName}`,
  description: "Manage site content and estimates",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = (await headers()).get("x-pathname") || "";
  const isLogin =
    pathname === "/admin/login" || pathname.startsWith("/admin/login/");

  if (isLogin) {
    return (
      <html lang="en">
        <body>
          {children}
          <Toaster richColors position="top-right" />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="overflow-hidden">
        <div className="flex h-svh flex-col bg-background text-foreground md:flex-row">
          <AdminSidebar />
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            <AdminTopBar />
            <main className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6">
              {children}
            </main>
          </div>
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
