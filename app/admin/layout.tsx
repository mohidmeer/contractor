import { siteName } from "@/data";
import "./admin.css";
import AdminSidebar from "./_components/AdminSidebar";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: `Admin | ${siteName}`,
  description: "Manage site content and estimates",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col bg-background text-foreground md:flex-row">
          <AdminSidebar />
          <main className="flex-1 overflow-x-hidden p-4 sm:p-6">{children}</main>
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
