import { Suspense } from "react";
import AdminLoginForm from "./AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-zinc-50 px-4 py-10">
      <Suspense
        fallback={
          <div className="w-full max-w-md rounded-xl border bg-card p-8 text-center text-sm text-muted-foreground shadow">
            Loading…
          </div>
        }
      >
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
