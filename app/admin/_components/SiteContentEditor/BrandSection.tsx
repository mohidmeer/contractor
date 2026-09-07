"use client";

import { Building2 } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import MediaForm from "../MediaForm";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BrandSection({ data, setData }: SiteContentSectionProps) {
  return (
    <CollapsibleSection
      title="Brand"
      description="Site identity, logo, analytics, footer tagline, JustCall"
      icon={Building2}
      defaultOpen
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Site name">
          <Input
            className={fieldClass}
            value={data.siteName}
            onChange={(e) => setData({ ...data, siteName: e.target.value })}
          />
        </Field>
        <Field label="Site URL">
          <Input
            className={fieldClass}
            value={data.siteUrl}
            onChange={(e) => setData({ ...data, siteUrl: e.target.value })}
          />
        </Field>
      </div>
      <MediaForm
        label="Site logo"
        initialUrl={data.siteLogo}
        onUploaded={(path) => setData({ ...data, siteLogo: path })}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Google Analytics ID">
          <Input
            className={fieldClass}
            value={data.googleAnalyticId}
            onChange={(e) =>
              setData({ ...data, googleAnalyticId: e.target.value })
            }
          />
        </Field>
        <Field label="Google Tag Manager ID">
          <Input
            className={fieldClass}
            value={data.googleTagManagerId}
            onChange={(e) =>
              setData({ ...data, googleTagManagerId: e.target.value })
            }
          />
        </Field>
      </div>
      <Field label="Footer tagline">
        <Textarea
          className={areaClass}
          value={data.FooterData.tagline}
          onChange={(e) =>
            setData({
              ...data,
              FooterData: { tagline: e.target.value },
            })
          }
        />
      </Field>
      <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-muted/20 p-4">
        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={data.enable_estimates}
            onChange={(e) =>
              setData({ ...data, enable_estimates: e.target.checked })
            }
          />
          Enable estimates
        </label>
        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={data.justCall.enabled}
            onChange={(e) =>
              setData({
                ...data,
                justCall: { ...data.justCall, enabled: e.target.checked },
              })
            }
          />
          JustCall enabled
        </label>
        <Field label="JustCall uhash">
          <Input
            className={fieldClass}
            value={data.justCall.uhash}
            onChange={(e) =>
              setData({
                ...data,
                justCall: { ...data.justCall, uhash: e.target.value },
              })
            }
          />
        </Field>
      </div>
    </CollapsibleSection>
  );
}
