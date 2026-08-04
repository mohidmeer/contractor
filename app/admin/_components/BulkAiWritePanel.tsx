"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Sparkles, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type BulkEntityType,
  getBulkAiEndpoint,
  getBulkCreateEndpoint,
  mapAiResultToCreatePayload,
  parseBulkPrompts,
} from "@/lib/ai/bulkMap";

type ProgressStatus =
  | "pending"
  | "generating"
  | "saving"
  | "done"
  | "error"
  | "cancelled";

type ProgressRow = {
  prompt: string;
  status: ProgressStatus;
  error?: string;
};

const TYPE_LABELS: Record<BulkEntityType, string> = {
  blogs: "Blogs",
  services: "Services",
  projects: "Projects",
  estimates: "Estimates",
};

export default function BulkAiWritePanel() {
  const [entityType, setEntityType] = useState<BulkEntityType>("blogs");
  const [promptsText, setPromptsText] = useState("");
  const [running, setRunning] = useState(false);
  const [rows, setRows] = useState<ProgressRow[]>([]);
  const cancelRef = useRef(false);

  const completed = rows.filter((r) => r.status === "done").length;
  const failed = rows.filter((r) => r.status === "error").length;

  const updateRow = (index: number, patch: Partial<ProgressRow>) => {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, ...patch } : row))
    );
  };

  const handleCancel = () => {
    cancelRef.current = true;
  };

  const handleBulkWrite = async () => {
    const prompts = parseBulkPrompts(promptsText);
    if (!prompts.length) {
      toast.error("Add at least one prompt (one per line)");
      return;
    }

    cancelRef.current = false;
    setRunning(true);
    setRows(prompts.map((prompt) => ({ prompt, status: "pending" })));

    const aiUrl = getBulkAiEndpoint(entityType);
    const createUrl = getBulkCreateEndpoint(entityType);
    let doneCount = 0;
    let failCount = 0;

    for (let i = 0; i < prompts.length; i++) {
      if (cancelRef.current) {
        setRows((prev) =>
          prev.map((row) =>
            row.status === "pending" ||
            row.status === "generating" ||
            row.status === "saving"
              ? { ...row, status: "cancelled" }
              : row
          )
        );
        break;
      }

      const prompt = prompts[i];
      updateRow(i, { status: "generating", error: undefined });

      try {
        const aiRes = await fetch(aiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, existing: null }),
        });
        const aiJson = await aiRes.json().catch(() => ({}));
        if (!aiRes.ok) {
          throw new Error(
            typeof aiJson.error === "string"
              ? aiJson.error
              : `AI failed (${aiRes.status})`
          );
        }

        if (cancelRef.current) {
          updateRow(i, { status: "cancelled" });
          break;
        }

        updateRow(i, { status: "saving" });
        const payload = mapAiResultToCreatePayload(
          entityType,
          (aiJson.data ?? {}) as Record<string, unknown>
        );

        const createRes = await fetch(createUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const createJson = await createRes.json().catch(() => ({}));
        if (!createRes.ok) {
          throw new Error(
            typeof createJson.error === "string"
              ? createJson.error
              : `Save failed (${createRes.status})`
          );
        }

        updateRow(i, { status: "done" });
        doneCount += 1;
      } catch (err) {
        failCount += 1;
        updateRow(i, {
          status: "error",
          error: err instanceof Error ? err.message : "Failed",
        });
      }
    }

    setRunning(false);
    if (cancelRef.current) {
      toast.message("Bulk write stopped", {
        description: `${doneCount} saved as draft, ${failCount} failed`,
      });
    } else if (failCount === 0) {
      toast.success(
        `Created ${doneCount} ${TYPE_LABELS[entityType].toLowerCase()} as drafts`
      );
    } else {
      toast.error(
        `Finished with errors: ${doneCount} saved, ${failCount} failed`
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Bulk write
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Paste one prompt per line. Each item is generated with AI, saved as a{" "}
          <strong>draft</strong> with no images, then you can review and publish
          from the admin lists.
        </p>

        <div className="space-y-2">
          <Label>Content type</Label>
          <Select
            value={entityType}
            onValueChange={(value) => setEntityType(value as BulkEntityType)}
            disabled={running}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blogs">Blogs</SelectItem>
              <SelectItem value="services">Services</SelectItem>
              <SelectItem value="projects">Projects</SelectItem>
              <SelectItem value="estimates">Estimates</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bulk-prompts">Prompts (one per line)</Label>
          <Textarea
            id="bulk-prompts"
            rows={8}
            value={promptsText}
            disabled={running}
            onChange={(e) => setPromptsText(e.target.value)}
            placeholder={
              "Office remodel case study in Tampa\nWarehouse floor coating article\nResidential kitchen renovation estimate brief"
            }
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            onClick={handleBulkWrite}
            disabled={running || !promptsText.trim()}
          >
            {running ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Writing...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Bulk write
              </>
            )}
          </Button>
          {running && (
            <Button type="button" variant="outline" onClick={handleCancel}>
              Stop
            </Button>
          )}
          {rows.length > 0 && (
            <span className="text-sm text-muted-foreground">
              {completed} / {rows.length} complete
              {failed > 0 ? ` · ${failed} failed` : ""}
            </span>
          )}
        </div>

        {rows.length > 0 && (
          <ul className="max-h-72 space-y-2 overflow-y-auto rounded-md border p-3 text-sm">
            {rows.map((row, index) => (
              <li
                key={`${index}-${row.prompt.slice(0, 24)}`}
                className="flex items-start gap-2"
              >
                <StatusIcon status={row.status} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{row.prompt}</p>
                  <p className="text-xs text-muted-foreground">
                    {statusLabel(row.status)}
                    {row.error ? ` — ${row.error}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function statusLabel(status: ProgressStatus) {
  switch (status) {
    case "pending":
      return "Waiting";
    case "generating":
      return "Generating with AI…";
    case "saving":
      return "Saving draft…";
    case "done":
      return "Saved as draft";
    case "error":
      return "Error";
    case "cancelled":
      return "Cancelled";
  }
}

function StatusIcon({ status }: { status: ProgressStatus }) {
  if (status === "done") {
    return <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />;
  }
  if (status === "error") {
    return <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />;
  }
  if (status === "generating" || status === "saving") {
    return (
      <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-muted-foreground" />
    );
  }
  return (
    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/40" />
  );
}
