import prisma from "@/lib/prisma";
import { sendFormRequestEmail } from "@/lib/mail/smtp";

function truncateError(message: string, max = 500) {
  const trimmed = message.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1)}…`;
}

/**
 * Attempt to email a form request notification.
 * Always updates emailStatus; never throws (safe for public submit path).
 */
export async function sendFormRequestNotification(
  requestId: string
): Promise<{ ok: boolean; error?: string }> {
  try {
    const request = await prisma.formRequest.findUnique({
      where: { id: requestId },
    });
    if (!request) {
      return { ok: false, error: "Request not found" };
    }

    await sendFormRequestEmail(request);

    await prisma.formRequest.update({
      where: { id: requestId },
      data: {
        emailStatus: "SENT",
        emailError: null,
      },
    });

    return { ok: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send email";
    console.error("[sendFormRequestNotification]", message);

    try {
      await prisma.formRequest.update({
        where: { id: requestId },
        data: {
          emailStatus: "ERROR",
          emailError: truncateError(message),
        },
      });
    } catch (updateError) {
      console.error(
        "[sendFormRequestNotification] failed to persist error status",
        updateError
      );
    }

    return { ok: false, error: message };
  }
}
