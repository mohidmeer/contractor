"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  SITE_CONTENT_ICON_OPTIONS,
  resolveSiteIcon,
} from "@/lib/siteContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function IconPickerWidget({
  value,
  onChange,
  label = "Icon",
  variant = "row",
}: {
  value: string;
  onChange: (iconName: string) => void;
  label?: string | null;
  variant?: "row" | "stack";
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const CurrentIcon = resolveSiteIcon(value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SITE_CONTENT_ICON_OPTIONS;
    return SITE_CONTENT_ICON_OPTIONS.filter((name) =>
      name.toLowerCase().includes(q)
    );
  }, [query]);

  const openPicker = () => {
    setQuery("");
    setOpen(true);
  };

  return (
    <div className="space-y-2">
      {label ? (
        <p className="text-[13px] font-semibold tracking-tight">{label}</p>
      ) : null}
      {variant === "stack" ? (
        <button
          type="button"
          onClick={openPicker}
          title={value || "Choose icon"}
          className={cn(
            "group flex w-fit flex-col items-start gap-1.5 rounded-2xl border border-border/70 bg-muted/25 px-3 py-2.5 transition-colors",
            "hover:border-primary/40 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          )}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/20">
            <CurrentIcon className="h-6 w-6" />
          </span>
          <span className="text-[11px] text-muted-foreground group-hover:text-foreground">
            Change icon
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={openPicker}
          className={cn(
            "group flex h-11 w-full items-center gap-3 rounded-xl border border-border/70 bg-muted/25 px-3 text-left transition-colors",
            "hover:border-primary/40 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          )}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm shadow-primary/20">
            <CurrentIcon className="h-4 w-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-medium">
              {value || "Choose icon"}
            </span>
            <span className="block text-[11px] text-muted-foreground">
              Click to browse icons
            </span>
          </span>
        </button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-lg overflow-hidden sm:rounded-2xl">
          <DialogHeader>
            <DialogTitle>Choose an icon</DialogTitle>
            <DialogDescription>
              Search or pick a visual icon. The selected icon is saved by name
              for the public site.
            </DialogDescription>
          </DialogHeader>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search icons (e.g. hammer, star)…"
              className="pl-9"
              autoFocus
            />
          </div>

          <div className="max-h-[50vh] overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                No icons match “{query}”.
              </p>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
                {filtered.map((name) => {
                  const Icon = resolveSiteIcon(name);
                  const selected = name === value;
                  return (
                    <button
                      key={name}
                      type="button"
                      title={name}
                      onClick={() => {
                        onChange(name);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex flex-col items-center gap-1.5 rounded-xl border p-2.5 transition-all",
                        selected
                          ? "border-primary bg-primary/10 ring-1 ring-primary/30"
                          : "border-border/60 bg-muted/20 hover:border-primary/40 hover:bg-muted/40"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-lg",
                          selected
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-foreground"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="w-full truncate text-center text-[10px] text-muted-foreground">
                        {name.replace(/^Fa/, "")}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
