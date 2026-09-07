"use client";

import { Phone } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection({ data, setData }: SiteContentSectionProps) {
  return (
    <CollapsibleSection
      title="Contact"
      description="Phone, email, address, hours, and map link"
      icon={Phone}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email">
          <Input
            className={fieldClass}
            value={data.contactInfo.email}
            onChange={(e) =>
              setData({
                ...data,
                contactInfo: { ...data.contactInfo, email: e.target.value },
              })
            }
          />
        </Field>
        <Field label="Working hours">
          <Input
            className={fieldClass}
            value={data.contactInfo.workingHours}
            onChange={(e) =>
              setData({
                ...data,
                contactInfo: {
                  ...data.contactInfo,
                  workingHours: e.target.value,
                },
              })
            }
          />
        </Field>
        <Field label="Phone text">
          <Input
            className={fieldClass}
            value={data.contactInfo.phone.text}
            onChange={(e) =>
              setData({
                ...data,
                contactInfo: {
                  ...data.contactInfo,
                  phone: { ...data.contactInfo.phone, text: e.target.value },
                },
              })
            }
          />
        </Field>
        <Field label="Phone href">
          <Input
            className={fieldClass}
            value={data.contactInfo.phone.href}
            onChange={(e) =>
              setData({
                ...data,
                contactInfo: {
                  ...data.contactInfo,
                  phone: { ...data.contactInfo.phone, href: e.target.value },
                },
              })
            }
          />
        </Field>
        <Field label="Phone number (E.164)">
          <Input
            className={fieldClass}
            value={data.contactInfo.phone.number}
            onChange={(e) =>
              setData({
                ...data,
                contactInfo: {
                  ...data.contactInfo,
                  phone: {
                    ...data.contactInfo.phone,
                    number: e.target.value,
                  },
                },
              })
            }
          />
        </Field>
        <Field label="Map embed URL">
          <Input
            className={fieldClass}
            value={data.contactInfo.mapEmbedUrl}
            onChange={(e) =>
              setData({
                ...data,
                contactInfo: {
                  ...data.contactInfo,
                  mapEmbedUrl: e.target.value,
                },
              })
            }
          />
        </Field>
      </div>
      <Field label="Address">
        <Textarea
          className={areaClass}
          value={data.contactInfo.address}
          onChange={(e) =>
            setData({
              ...data,
              contactInfo: { ...data.contactInfo, address: e.target.value },
            })
          }
        />
      </Field>
    </CollapsibleSection>
  );
}
