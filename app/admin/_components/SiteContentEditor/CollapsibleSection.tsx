"use client";

import { useState, type ComponentType } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export default function CollapsibleSection({
  title,
  description,
  icon: Icon,
  defaultOpen = false,
  children,
}: {
  title: string;
  description?: string;
  icon: ComponentType<IconProps>;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-200",
        open
          ? "border-primary/25 shadow-md ring-1 ring-primary/10"
          : "border-border/70 hover:border-border hover:shadow"
      )}
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors",
            open ? "bg-primary/[0.04]" : "hover:bg-muted/40"
          )}
        >
          <div className="flex min-w-0 items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                open
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                  : "bg-muted text-foreground/80"
              )}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="text-base font-semibold tracking-tight">{title}</p>
              {description ? (
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  {description}
                </p>
              ) : null}
            </div>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
              open && "rotate-180 text-primary"
            )}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-border/60 bg-muted/[0.15] px-5 py-4">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
