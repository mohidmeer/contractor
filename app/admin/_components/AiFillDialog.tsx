"use client";

import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type AiFillDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  placeholder?: string;
  loading?: boolean;
  onGenerate: (prompt: string) => Promise<void>;
};

export default function AiFillDialog({
  open,
  onOpenChange,
  title = "Fill with AI",
  description = "Describe what you want generated. Images are left blank for you to upload.",
  placeholder = "e.g. Concrete driveway installation for Florida homes, including pours, replacements, and sealing...",
  loading = false,
  onGenerate,
}: AiFillDialogProps) {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    const value = prompt.trim();
    if (!value || loading) return;
    await onGenerate(value);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (loading) return;
        onOpenChange(next);
        if (!next) setPrompt("");
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <Label htmlFor="ai-prompt">Prompt</Label>
          <Textarea
            id="ai-prompt"
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={placeholder}
            disabled={loading}
          />
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            type="button"
            variant="outline"
            disabled={loading}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            disabled={loading || !prompt.trim()}
            onClick={handleGenerate}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
