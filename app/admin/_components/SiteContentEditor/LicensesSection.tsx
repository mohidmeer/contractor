"use client";

import { Plus, ShieldCheck, Trash2 } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import { Field, fieldClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LicensesSection({ data, setData }: SiteContentSectionProps) {
  const updateLicense = (index: number, patch: { number?: string; label?: string }) => {
    const licenses = data.licenses.map((license, i) =>
      i === index ? { ...license, ...patch } : license
    );
    setData({ ...data, licenses });
  };

  const addLicense = () => {
    setData({
      ...data,
      licenses: [...data.licenses, { number: "", label: "" }],
    });
  };

  const removeLicense = (index: number) => {
    setData({
      ...data,
      licenses: data.licenses.filter((_, i) => i !== index),
    });
  };

  return (
    <CollapsibleSection
      title="Licenses"
      description="License numbers and labels shown in the navbar and footer"
      icon={ShieldCheck}
    >
      <div className="flex justify-end">
        <Button type="button" size="sm" onClick={addLicense}>
          <Plus className="h-4 w-4" />
          Add license
        </Button>
      </div>

      {data.licenses.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No licenses yet. Add one to show it on the site.
        </p>
      ) : (
        <div className="space-y-3">
          {data.licenses.map((license, index) => (
            <div
              key={index}
              className="grid gap-3 rounded-xl border border-border/60 bg-muted/20 p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-end"
            >
              <Field label="Number">
                <Input
                  className={fieldClass}
                  value={license.number}
                  onChange={(e) => updateLicense(index, { number: e.target.value })}
                />
              </Field>
              <Field label="Label">
                <Input
                  className={fieldClass}
                  value={license.label}
                  onChange={(e) => updateLicense(index, { label: e.target.value })}
                />
              </Field>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-11 w-11 shrink-0"
                aria-label={`Remove license ${index + 1}`}
                onClick={() => removeLicense(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </CollapsibleSection>
  );
}
