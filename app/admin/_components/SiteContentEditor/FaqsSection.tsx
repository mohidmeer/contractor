"use client";

import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

function FaqItem({
  index,
  question,
  answer,
  onQuestionChange,
  onAnswerChange,
}: {
  index: number;
  question: string;
  answer: string;
  onQuestionChange: (value: string) => void;
  onAnswerChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm transition-all",
        open
          ? "border-primary/25 shadow-md ring-1 ring-primary/10"
          : "border-border/60 hover:shadow-md"
      )}
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors",
            open ? "border-b border-border/50 bg-muted/25" : "hover:bg-muted/20"
          )}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Question {index + 1}
            </p>
            <p className="truncate text-sm font-medium text-foreground">
              {question || "Untitled question"}
            </p>
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
        <div className="space-y-3 p-4">
          <Field label="Question">
            <Input
              className={fieldClass}
              value={question}
              onChange={(e) => onQuestionChange(e.target.value)}
            />
          </Field>
          <Field label="Answer">
            <Textarea
              className={areaClass}
              rows={3}
              value={answer}
              onChange={(e) => onAnswerChange(e.target.value)}
            />
          </Field>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function FaqsSection({ data, setData }: SiteContentSectionProps) {
  return (
    <CollapsibleSection
      title="FAQs"
      description="Homepage frequently asked questions"
      icon={CircleHelp}
    >
      <div className="space-y-3">
        {data.faqs.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            onQuestionChange={(question) => {
              const faqs = [...data.faqs];
              faqs[index] = { ...faq, question };
              setData({ ...data, faqs });
            }}
            onAnswerChange={(answer) => {
              const faqs = [...data.faqs];
              faqs[index] = { ...faq, answer };
              setData({ ...data, faqs });
            }}
          />
        ))}
      </div>
    </CollapsibleSection>
  );
}
