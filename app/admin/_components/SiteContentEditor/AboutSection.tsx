"use client";

import { FileText } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AboutSection({
  data,
  setData,
  forceOpenSections,
  forceOpenKey,
}: SiteContentSectionProps) {
  return (
    <CollapsibleSection
      title="About page"
      description="About SEO title and body copy"
      icon={FileText}
      forceOpen={forceOpenSections?.has("about")}
      forceOpenKey={forceOpenKey}
    >
      <Field label="About SEO title">
        <Input
          className={fieldClass}
          value={data.aboutPage.seo.title}
          onChange={(e) =>
            setData({
              ...data,
              aboutPage: {
                ...data.aboutPage,
                seo: { ...data.aboutPage.seo, title: e.target.value },
              },
            })
          }
        />
      </Field>
      <Field label="About content">
        <Textarea
          className={areaClass}
          rows={5}
          value={data.aboutPage.content}
          onChange={(e) =>
            setData({
              ...data,
              aboutPage: { ...data.aboutPage, content: e.target.value },
            })
          }
        />
      </Field>
    </CollapsibleSection>
  );
}
