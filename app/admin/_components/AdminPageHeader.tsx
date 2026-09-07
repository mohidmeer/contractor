import { ReactNode } from "react";

type AdminPageHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

/**
 * Page actions only — section title/description live in the fixed AdminTopBar.
 * `title` / `description` remain in the API for call-site compatibility.
 */
export default function AdminPageHeader({
  title: _title,
  description: _description,
  action,
}: AdminPageHeaderProps) {
  if (!action) return null;

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
      <div className="flex shrink-0 items-center gap-2">{action}</div>
    </div>
  );
}
