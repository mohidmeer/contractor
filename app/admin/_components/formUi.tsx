import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const fieldClass =
  "h-11 rounded-xl border-border/70 bg-muted/25 shadow-none transition-colors placeholder:text-muted-foreground/70 focus-visible:bg-background focus-visible:ring-primary/30";

export const areaClass =
  "rounded-xl border-border/70 bg-muted/25 shadow-none transition-colors placeholder:text-muted-foreground/70 focus-visible:bg-background focus-visible:ring-primary/30";

export const selectTriggerClass =
  "h-11 rounded-xl border-border/70 bg-muted/25 shadow-none focus:ring-primary/30";

export function Field({
  label,
  hint,
  htmlFor,
  className,
  children,
}: {
  label: string;
  hint?: string;
  htmlFor?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between gap-2">
        <Label
          htmlFor={htmlFor}
          className="text-[13px] font-semibold tracking-tight"
        >
          {label}
        </Label>
        {hint ? (
          <span className="text-[11px] text-muted-foreground">{hint}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function FormCard({
  title,
  description,
  action,
  children,
  contentClassName,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  contentClassName?: string;
}) {
  return (
    <Card className="overflow-hidden rounded-2xl border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between gap-3 border-b bg-muted/20 pb-4">
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          {description ? (
            <p className="text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {action}
      </CardHeader>
      <CardContent className={cn("pt-5", contentClassName)}>{children}</CardContent>
    </Card>
  );
}

export function AiDraftBanner({
  description,
  action,
}: {
  description: string;
  action: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-dashed border-primary/20 bg-gradient-to-br from-primary/[0.04] to-transparent px-4 py-3.5">
      <div>
        <p className="text-sm font-semibold">AI-assisted drafting</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  );
}

export function ItemBadge({
  n,
  tone = "primary",
}: {
  n: number;
  tone?: "primary" | "sky" | "emerald" | "amber";
}) {
  const tones = {
    primary: "bg-primary text-primary-foreground",
    sky: "bg-sky-600/10 text-sky-800",
    emerald: "bg-emerald-600/10 text-emerald-800",
    amber: "bg-amber-600/10 text-amber-800",
  };
  return (
    <span
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold",
        tones[tone]
      )}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}
