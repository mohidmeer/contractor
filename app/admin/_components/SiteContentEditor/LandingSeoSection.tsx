"use client";

import { Search } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import MediaForm from "../MediaForm";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function LandingSeoSection({
  data,
  setData,
  forceOpenSections,
  forceOpenKey,
}: SiteContentSectionProps) {
  return (
    <CollapsibleSection
      title="Landing SEO"
      description="Homepage SEO and services / projects section headings"
      icon={Search}
      forceOpen={forceOpenSections?.has("landing-seo")}
      forceOpenKey={forceOpenKey}
    >
      <Field label="SEO title">
        <Input
          className={fieldClass}
          value={data.landingPage.seo.title}
          onChange={(e) =>
            setData({
              ...data,
              landingPage: {
                ...data.landingPage,
                seo: { ...data.landingPage.seo, title: e.target.value },
              },
            })
          }
        />
      </Field>
      <Field label="SEO description">
        <Textarea
          className={areaClass}
          value={data.landingPage.seo.description}
          onChange={(e) =>
            setData({
              ...data,
              landingPage: {
                ...data.landingPage,
                seo: {
                  ...data.landingPage.seo,
                  description: e.target.value,
                },
              },
            })
          }
        />
      </Field>
      <MediaForm
        label="SEO / OG image"
        initialUrl={data.landingPage.seo.ogImage}
        onUploaded={(path) =>
          setData({
            ...data,
            landingPage: {
              ...data.landingPage,
              seo: { ...data.landingPage.seo, ogImage: path },
            },
          })
        }
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Services heading">
          <Input
            className={fieldClass}
            value={data.landingPage.services.heading}
            onChange={(e) =>
              setData({
                ...data,
                landingPage: {
                  ...data.landingPage,
                  services: { heading: e.target.value },
                },
              })
            }
          />
        </Field>
        <Field label="Projects heading">
          <Input
            className={fieldClass}
            value={data.landingPage.projects.heading}
            onChange={(e) =>
              setData({
                ...data,
                landingPage: {
                  ...data.landingPage,
                  projects: { heading: e.target.value },
                },
              })
            }
          />
        </Field>
      </div>
    </CollapsibleSection>
  );
}
