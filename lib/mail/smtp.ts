import nodemailer from "nodemailer";
import type { FormRequest } from "@prisma/client";
import prisma from "@/lib/prisma";
import { SETTING_ID } from "@/lib/apiKeys";
import { FORM_REQUEST_TYPE_LABELS } from "@/lib/formRequestSchema";
import { siteName } from "@/data";

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

export async function getSmtpConfig(): Promise<Partial<SmtpConfig> & { hasPass: boolean }> {
  const setting = await prisma.setting.findUnique({
    where: { id: SETTING_ID },
  });

  return {
    host: setting?.smtpHost?.trim() || undefined,
    port: setting?.smtpPort ?? undefined,
    secure: Boolean(setting?.smtpSecure),
    user: setting?.smtpUser?.trim() || undefined,
    pass: setting?.smtpPass ?? undefined,
    from: setting?.smtpFrom?.trim() || undefined,
    to: setting?.smtpTo?.trim() || undefined,
    hasPass: Boolean(setting?.smtpPass?.trim()),
  };
}

export function isSmtpConfigured(
  config: Partial<SmtpConfig>
): config is SmtpConfig {
  return Boolean(
    config.host &&
      config.port &&
      Number.isFinite(config.port) &&
      config.port > 0 &&
      config.user &&
      config.pass &&
      config.from &&
      config.to
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendFormRequestEmail(request: FormRequest): Promise<void> {
  const config = await getSmtpConfig();
  if (!isSmtpConfigured(config)) {
    throw new Error(
      "SMTP is not configured. Add SMTP settings in Admin → Settings."
    );
  }

  const typeLabel =
    FORM_REQUEST_TYPE_LABELS[
      request.type as keyof typeof FORM_REQUEST_TYPE_LABELS
    ] ?? request.type;

  const submittedAt = new Date(request.createdAt).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = `[${siteName}] ${typeLabel} — ${request.name}`;

  const lines = [
    `New form submission on ${siteName}`,
    "",
    `Type: ${typeLabel}`,
    `Name: ${request.name}`,
    `Phone: ${request.phone}`,
    `Address: ${request.address || "—"}`,
    `Message: ${request.message || "—"}`,
    `Site: ${request.site}`,
    `Submitted: ${submittedAt}`,
    "",
    "This request is also available in Admin → Requests.",
  ];

  const text = lines.join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h2 style="margin:0 0 12px">New form submission on ${escapeHtml(siteName)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        <tr><td style="padding:6px 0;font-weight:600">Type</td><td>${escapeHtml(typeLabel)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Name</td><td>${escapeHtml(request.name)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Phone</td><td>${escapeHtml(request.phone)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Address</td><td>${escapeHtml(request.address || "—")}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Message</td><td>${escapeHtml(request.message || "—")}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Site</td><td>${escapeHtml(request.site)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600">Submitted</td><td>${escapeHtml(submittedAt)}</td></tr>
      </table>
      <p style="margin-top:16px;color:#555;font-size:13px">This request is also available in Admin → Requests.</p>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    subject,
    text,
    html,
  });
}
