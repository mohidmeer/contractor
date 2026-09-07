"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import type { SiteContent } from "@/lib/siteContent";
import type { SiteContentSectionId } from "@/lib/ai/siteContentSectionAi";
import { Button } from "@/components/ui/button";
import AiFillDialog from "../AiFillDialog";

type Props = {
  sectionId: SiteContentSectionId;
  sectionLabel: string;
  data: SiteContent;
  setData: Dispatch<SetStateAction<SiteContent | null>>;
};

export default function SectionAiUpdateButton({
  sectionId,
  sectionLabel,
  data,
  setData,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onGenerate = async (prompt: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/ai/site-content-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sectionId,
          prompt,
          content: data,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(
          typeof json.error === "string" ? json.error : "AI update failed"
        );
      }
      setData(json.data as SiteContent);
      setOpen(false);
      toast.success(`${sectionLabel} updated — review and Save all`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "AI update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 shrink-0 gap-1.5 text-xs"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <Sparkles className="h-3.5 w-3.5" />
        Update with AI
      </Button>
      <AiFillDialog
        open={open}
        onOpenChange={setOpen}
        title={`Update ${sectionLabel} with AI`}
        description="Describe what to change. Only fields you ask for will update; images and locked data stay as they are."
        placeholder={`e.g. Make the ${sectionLabel.toLowerCase()} copy punchier for coastal Florida commercial jobs...`}
        loading={loading}
        onGenerate={onGenerate}
      />
    </>
  );
}
