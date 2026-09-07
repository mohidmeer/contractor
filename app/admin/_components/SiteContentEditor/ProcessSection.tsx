"use client";

import { ListOrdered } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import SectionAiUpdateButton from "./SectionAiUpdateButton";
import IconPickerWidget from "./IconPickerWidget";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProcessSection({ data, setData }: SiteContentSectionProps) {
  return (
    <CollapsibleSection
      title="Process"
      description="Our process steps and icons"
      icon={ListOrdered}
      headerAction={
        <SectionAiUpdateButton
          sectionId="process"
          sectionLabel="Process"
          data={data}
          setData={setData}
        />
      }
    >
      <Field label="Heading">
        <Input
          className={fieldClass}
          value={data.ourProcessData.heading}
          onChange={(e) =>
            setData({
              ...data,
              ourProcessData: {
                ...data.ourProcessData,
                heading: e.target.value,
              },
            })
          }
        />
      </Field>
      <Field label="Description">
        <Textarea
          className={areaClass}
          value={data.ourProcessData.description}
          onChange={(e) =>
            setData({
              ...data,
              ourProcessData: {
                ...data.ourProcessData,
                description: e.target.value,
              },
            })
          }
        />
      </Field>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.ourProcessData.list.map((step, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-xl border border-border/60 bg-muted/20 p-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Step {index + 1}
            </p>
            <IconPickerWidget
              value={step.icon}
              label={null}
              variant="stack"
              onChange={(icon) => {
                const list = [...data.ourProcessData.list];
                list[index] = { ...step, icon };
                setData({
                  ...data,
                  ourProcessData: { ...data.ourProcessData, list },
                });
              }}
            />
            <Field label="Title">
              <Input
                className={fieldClass}
                value={step.title}
                onChange={(e) => {
                  const list = [...data.ourProcessData.list];
                  list[index] = { ...step, title: e.target.value };
                  setData({
                    ...data,
                    ourProcessData: { ...data.ourProcessData, list },
                  });
                }}
              />
            </Field>
            <Field label="Description">
              <Textarea
                className={areaClass}
                rows={4}
                value={step.description}
                onChange={(e) => {
                  const list = [...data.ourProcessData.list];
                  list[index] = { ...step, description: e.target.value };
                  setData({
                    ...data,
                    ourProcessData: { ...data.ourProcessData, list },
                  });
                }}
              />
            </Field>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
