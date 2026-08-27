"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Mail, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SmtpState = {
  smtpHost: string;
  smtpPort: number;
  smtpSecure: boolean;
  smtpUser: string;
  smtpPassMasked: string;
  hasSmtpPass: boolean;
  smtpFrom: string;
  smtpTo: string;
  smtpBcc: string;
  smtpConfigured: boolean;
};

const emptySmtp: SmtpState = {
  smtpHost: "",
  smtpPort: 587,
  smtpSecure: false,
  smtpUser: "",
  smtpPassMasked: "",
  hasSmtpPass: false,
  smtpFrom: "",
  smtpTo: "",
  smtpBcc: "",
  smtpConfigured: false,
};

function splitRecipients(value: string): string[] {
  const parts = value
    .split(/[,;]+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.length > 0 ? parts : [""];
}

export default function SmtpSettingsPanel() {
  const [smtp, setSmtp] = useState<SmtpState>(emptySmtp);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);

  const [host, setHost] = useState("");
  const [port, setPort] = useState("587");
  const [secure, setSecure] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [from, setFrom] = useState("");
  const [recipients, setRecipients] = useState<string[]>([""]);
  const [bcc, setBcc] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings", { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load settings (${res.status})`);
      const data = await res.json();
      setSmtp({
        smtpHost: data.smtpHost ?? "",
        smtpPort: data.smtpPort ?? 587,
        smtpSecure: Boolean(data.smtpSecure),
        smtpUser: data.smtpUser ?? "",
        smtpPassMasked: data.smtpPassMasked ?? "",
        hasSmtpPass: Boolean(data.hasSmtpPass),
        smtpFrom: data.smtpFrom ?? "",
        smtpTo: data.smtpTo ?? "",
        smtpBcc: data.smtpBcc ?? "",
        smtpConfigured: Boolean(data.smtpConfigured),
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load SMTP");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const openModal = () => {
    setHost(smtp.smtpHost);
    setPort(String(smtp.smtpPort || 587));
    setSecure(smtp.smtpSecure);
    setUser(smtp.smtpUser);
    setPass("");
    setFrom(smtp.smtpFrom);
    setRecipients(splitRecipients(smtp.smtpTo));
    setBcc(smtp.smtpBcc);
    setOpen(true);
  };

  const updateRecipient = (index: number, value: string) => {
    setRecipients((prev) => prev.map((r, i) => (i === index ? value : r)));
  };

  const addRecipient = () => {
    setRecipients((prev) => [...prev, ""]);
  };

  const removeRecipient = (index: number) => {
    setRecipients((prev) => {
      if (prev.length <= 1) return [""];
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = recipients.map((r) => r.trim()).filter(Boolean);
    if (cleaned.length === 0) {
      toast.error("Add at least one recipient");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          smtpHost: host,
          smtpPort: Number(port) || 587,
          smtpSecure: secure,
          smtpUser: user,
          smtpPass: pass,
          smtpFrom: from,
          smtpTo: cleaned.join(", "),
          smtpBcc: bcc,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to save SMTP");

      setSmtp({
        smtpHost: data.smtpHost ?? "",
        smtpPort: data.smtpPort ?? 587,
        smtpSecure: Boolean(data.smtpSecure),
        smtpUser: data.smtpUser ?? "",
        smtpPassMasked: data.smtpPassMasked ?? "",
        hasSmtpPass: Boolean(data.hasSmtpPass),
        smtpFrom: data.smtpFrom ?? "",
        smtpTo: data.smtpTo ?? "",
        smtpBcc: data.smtpBcc ?? "",
        smtpConfigured: Boolean(data.smtpConfigured),
      });
      setOpen(false);
      toast.success("SMTP settings saved");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const recipientCount = smtp.smtpTo
    ? smtp.smtpTo.split(/[,;]+/).filter((p) => p.trim()).length
    : 0;

  return (
    <>
      <Card>
        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Mail className="h-4 w-4" />
            </span>
            <div className="min-w-0 space-y-1">
              <h3 className="text-sm font-semibold tracking-tight">SMTP email</h3>
              <p className="text-xs text-muted-foreground">
                Send form submissions (consultation & quote) to your inbox.
              </p>
              {loading ? (
                <p className="pt-1 text-xs text-muted-foreground">Loading…</p>
              ) : smtp.smtpConfigured ? (
                <div className="space-y-1 pt-1">
                  <Badge variant="secondary">Configured</Badge>
                  <p className="text-xs text-muted-foreground">
                    Host <span className="font-medium text-foreground">{smtp.smtpHost}</span>
                    {" · "}
                    {recipientCount} recipient{recipientCount === 1 ? "" : "s"}
                  </p>
                  <p
                    className="truncate text-xs text-muted-foreground"
                    title={smtp.smtpTo}
                  >
                    To {smtp.smtpTo}
                  </p>
                </div>
              ) : (
                <p className="pt-1 text-xs text-muted-foreground">
                  Not set — add SMTP credentials to email new requests.
                </p>
              )}
            </div>
          </div>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="shrink-0"
            onClick={openModal}
            disabled={loading}
          >
            <Pencil className="h-3.5 w-3.5" />
            Edit SMTP
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (saving) return;
          setOpen(next);
        }}
      >
        <DialogContent className="flex max-h-[92vh] w-[min(96vw,32rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
          <form onSubmit={handleSave} className="flex min-h-0 flex-1 flex-col">
            <DialogHeader className="border-b bg-muted/20 px-6 py-5">
              <DialogTitle className="flex items-center gap-2 text-lg">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                SMTP settings
              </DialogTitle>
              <DialogDescription>
                Used to notify your client inbox when someone submits a form.
                Leave password blank to keep the existing one.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 overflow-y-auto px-6 py-5">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="smtp-host">Host</Label>
                  <Input
                    id="smtp-host"
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
                    placeholder="smtp.example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">Port</Label>
                  <Input
                    id="smtp-port"
                    type="number"
                    min="1"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    required
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={secure}
                  onChange={(e) => setSecure(e.target.checked)}
                  className="h-4 w-4 rounded border"
                />
                Use secure connection (TLS / port 465)
              </label>

              <div className="space-y-2">
                <Label htmlFor="smtp-user">Username</Label>
                <Input
                  id="smtp-user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="user@example.com"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-pass">Password</Label>
                <Input
                  id="smtp-pass"
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder={
                    smtp.hasSmtpPass
                      ? `Saved: ${smtp.smtpPassMasked} — leave blank to keep`
                      : "SMTP password"
                  }
                  autoComplete="new-password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-from">From address</Label>
                <Input
                  id="smtp-from"
                  type="email"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="noreply@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Label>Recipients (To)</Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={addRecipient}
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add
                  </Button>
                </div>
                <div className="space-y-2">
                  {recipients.map((email, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => updateRecipient(index, e.target.value)}
                        placeholder="client@example.com"
                        required={index === 0}
                        aria-label={`Recipient ${index + 1}`}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        disabled={recipients.length <= 1}
                        onClick={() => removeRecipient(index)}
                        aria-label="Remove recipient"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  At least one recipient is required. All listed addresses get the lead email.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-bcc">BCC (optional)</Label>
                <Input
                  id="smtp-bcc"
                  type="email"
                  value={bcc}
                  onChange={(e) => setBcc(e.target.value)}
                  placeholder="copy@example.com"
                />
                <p className="text-xs text-muted-foreground">
                  Blind carbon copy — left blank means no BCC.
                </p>
              </div>
            </div>

            <DialogFooter className="gap-2 border-t bg-muted/20 px-6 py-4 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                disabled={saving}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Saving…" : "Save SMTP"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
