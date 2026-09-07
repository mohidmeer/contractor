"use client";

import { Sparkles } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import SectionAiUpdateButton from "./SectionAiUpdateButton";
import IconPickerWidget from "./IconPickerWidget";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function WhyUsSection({ data, setData }: SiteContentSectionProps) {
  return (
    <CollapsibleSection
      title="Why us & stats"
      description="Differentiators and accomplishment numbers"
      icon={Sparkles}
      headerAction={
        <SectionAiUpdateButton
          sectionId="why-us"
          sectionLabel="Why us"
          data={data}
          setData={setData}
        />
      }
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.WhyUSData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-xl border border-border/60 bg-muted/20 p-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Point {index + 1}
            </p>
            <IconPickerWidget
              value={item.icon}
              label={null}
              variant="stack"
              onChange={(icon) => {
                const WhyUSData = [...data.WhyUSData];
                WhyUSData[index] = { ...item, icon };
                setData({ ...data, WhyUSData });
              }}
            />
            <Field label="Title">
              <Input
                className={fieldClass}
                value={item.title}
                onChange={(e) => {
                  const WhyUSData = [...data.WhyUSData];
                  WhyUSData[index] = { ...item, title: e.target.value };
                  setData({ ...data, WhyUSData });
                }}
              />
            </Field>
            <Field label="Description">
              <Textarea
                className={areaClass}
                rows={4}
                value={item.description}
                onChange={(e) => {
                  const WhyUSData = [...data.WhyUSData];
                  WhyUSData[index] = { ...item, description: e.target.value };
                  setData({ ...data, WhyUSData });
                }}
              />
            </Field>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {data.accomplishmentData.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-2">
            <Field label="Stat label">
              <Input
                className={fieldClass}
                value={item.title}
                onChange={(e) => {
                  const accomplishmentData = [...data.accomplishmentData];
                  accomplishmentData[index] = {
                    ...item,
                    title: e.target.value,
                  };
                  setData({ ...data, accomplishmentData });
                }}
              />
            </Field>
            <Field label="Number">
              <Input
                className={fieldClass}
                type="number"
                value={item.number}
                onChange={(e) => {
                  const accomplishmentData = [...data.accomplishmentData];
                  accomplishmentData[index] = {
                    ...item,
                    number: Number(e.target.value) || 0,
                  };
                  setData({ ...data, accomplishmentData });
                }}
              />
            </Field>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
