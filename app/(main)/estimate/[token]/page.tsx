import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaFileInvoiceDollar,
  FaPhoneAlt,
  FaPlay,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import prisma from "@/lib/prisma";
import { contactInfo, enable_estimates, siteName } from "@/data";
import { serializeEstimate } from "@/lib/estimateHelpers";
import DownloadEstimatePdfButton from "@/components/DownloadEstimatePdfButton";
import {
  getYouTubeEmbedUrl,
  getYouTubeThumbnailUrl,
  getYouTubeWatchUrl,
} from "@/lib/youtube";

type Props = {
  params: Promise<{ token: string }>;
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

async function getPublicEstimate(token: string) {
  if (!enable_estimates) return null;

  const estimate = await prisma.estimate.findUnique({
    where: { token },
    include: { items: true },
  });

  if (!estimate || estimate.status === "DRAFT") return null;

  if (estimate.status === "SENT") {
    try {
      await prisma.estimate.update({
        where: { id: estimate.id },
        data: { status: "VIEWED" },
      });
      estimate.status = "VIEWED";
    } catch (error) {
      console.error("Failed to mark estimate as viewed", error);
    }
  }

  return serializeEstimate(estimate);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { token } = await params;
  const estimate = await getPublicEstimate(token);

  if (!estimate) {
    return { title: "Estimate Not Found" };
  }

  return {
    title: estimate.title,
    description: estimate.description || `Estimate from ${siteName}`,
    robots: { index: false, follow: false },
  };
}

export default async function PublicEstimatePage({ params }: Props) {
  const { token } = await params;
  const estimate = await getPublicEstimate(token);

  if (!estimate) notFound();

  const statusLabel =
    estimate.status.charAt(0) + estimate.status.slice(1).toLowerCase();
  const createdLabel = new Date(estimate.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const youtubeEmbedUrl = getYouTubeEmbedUrl(estimate.youtubeUrl);
  const youtubeWatchUrl = getYouTubeWatchUrl(estimate.youtubeUrl);
  const youtubeThumbnailUrl = getYouTubeThumbnailUrl(estimate.youtubeUrl);

  return (
    <main className="flex flex-col gap-8 pb-12 pt-6 sm:pt-10">
      <section className="container mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          {/* Prominent download action — outside PDF capture */}
          <div className="card flex flex-col gap-4 rounded-2xl bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-lg font-semibold text-heading">
                Save this estimate
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Download an exact PDF copy of this estimate for your records.
              </p>
            </div>
            <DownloadEstimatePdfButton
              fileName={`${estimate.title}-estimate`}
            />
          </div>

          {/* Captured in PDF: header through notes only */}
          <div
            id="estimate-document"
            className="flex flex-col gap-6 bg-white p-1"
          >
            {/* Estimate document header */}
            <div className="card overflow-hidden rounded-2xl bg-white">
              <div className="bg-primary px-6 py-8 text-white sm:px-8 sm:py-10">
                <div className="min-w-0">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-white/80">
                      {siteName}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      Project estimate
                    </p>
                  </div>

                  <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                    {estimate.title}
                  </h1>

                  {estimate.description && (
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85">
                      {estimate.description}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium ring-1 ring-white/20">
                      <FaUser size={12} />
                      {estimate.clientName}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium ring-1 ring-white/20">
                      <FaCalendarAlt size={12} />
                      {createdLabel}
                    </span>
                    <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-primary">
                      {statusLabel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 border-t border-primary/10 bg-secondary/5 px-6 py-5 sm:grid-cols-3 sm:px-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <FaUser size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Prepared for
                    </p>
                    <p className="font-semibold text-heading">
                      {estimate.clientName}
                    </p>
                    {estimate.clientEmail && (
                      <p className="mt-0.5 truncate text-sm text-gray-600">
                        {estimate.clientEmail}
                      </p>
                    )}
                    {estimate.clientPhone && (
                      <p className="mt-0.5 text-sm text-gray-600">
                        {estimate.clientPhone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <FaFileInvoiceDollar size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Prepared by
                    </p>
                    <p className="font-semibold text-heading">{siteName}</p>
                    <p className="mt-0.5 text-sm text-gray-600">
                      {contactInfo.phone.text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <FaCalendarAlt size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Issued on
                    </p>
                    <p className="font-semibold text-heading">{createdLabel}</p>
                    <p className="mt-0.5 text-sm text-gray-600">
                      Status: {statusLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {youtubeEmbedUrl && youtubeWatchUrl && youtubeThumbnailUrl && (
              <div className="card overflow-hidden rounded-xl bg-white">
                <div className="flex flex-col gap-1 border-b border-primary/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Project video
                    </p>
                    <h2 className="mt-1 text-heading text-2xl">
                      Watch the walkthrough
                    </h2>
                  </div>
                  <a
                    href={youtubeWatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline sm:mt-0"
                  >
                    <FaYoutube size={20} className="text-red-600" />
                    Open on YouTube
                  </a>
                </div>

                <div className="relative aspect-video w-full bg-heading">
                  {/* Thumbnail keeps PDF screenshots useful when iframe is blank */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={youtubeThumbnailUrl}
                    alt="YouTube video thumbnail"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-heading/30">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                      <FaPlay size={22} className="ml-1" />
                    </span>
                  </div>
                  <iframe
                    src={youtubeEmbedUrl}
                    title="Estimate project video"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    data-html2canvas-ignore="true"
                  />
                </div>
              </div>
            )}

            {/* Line items */}
            <div className="card rounded-xl bg-white p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-3 border-b border-primary/10 pb-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Line items
                  </p>
                  <h2 className="mt-1 text-heading text-2xl">Scope of work</h2>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="border-b border-primary/15 text-heading">
                      <th className="px-3 py-3 text-sm font-semibold">Item</th>
                      <th className="px-3 py-3 text-sm font-semibold">Qty</th>
                      <th className="px-3 py-3 text-sm font-semibold">
                        Unit price
                      </th>
                      <th className="px-3 py-3 text-right text-sm font-semibold">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {estimate.items.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <td className="px-3 py-4 align-top">
                          <p className="font-semibold text-heading">
                            {item.name}
                          </p>
                          {item.description && (
                            <p className="mt-1 text-sm text-gray-600">
                              {item.description}
                            </p>
                          )}
                        </td>
                        <td className="px-3 py-4 align-top text-gray-700">
                          {item.quantity}
                        </td>
                        <td className="px-3 py-4 align-top text-gray-700">
                          {formatMoney(item.unitPrice)}
                        </td>
                        <td className="px-3 py-4 text-right align-top font-semibold text-heading">
                          {formatMoney(item.subtotal)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col gap-2 rounded-xl bg-primary/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-lg font-semibold text-heading">Grand total</p>
                <p className="text-3xl font-bold text-primary">
                  {formatMoney(estimate.total)}
                </p>
              </div>

              {estimate.notes && (
                <div className="mt-6 rounded-xl border border-primary/10 bg-secondary/5 p-5">
                  <p className="mb-2 font-semibold text-heading">Notes</p>
                  <p className="whitespace-pre-wrap text-gray-700">
                    {estimate.notes}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact CTA — not included in PDF */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="group flex items-start gap-4 rounded-xl border border-primary/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary/80 p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-heading">Phone</p>
                <a
                  href={contactInfo.phone.href}
                  className="text-base text-gray-700 transition-colors hover:text-primary"
                >
                  {contactInfo.phone.text}
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-xl border border-primary/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary/80 p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <FaEnvelope size={24} />
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-heading">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all text-base text-gray-700 transition-colors hover:text-primary"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="card flex flex-col items-start justify-between gap-4 rounded-xl bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-semibold text-heading">
                Questions about this estimate?
              </p>
              <p className="p1 mt-1 text-gray-700">
                Reach out and we will walk you through every line item.
              </p>
            </div>
            <a
              href={contactInfo.phone.href}
              className="btn-primary flex items-center gap-2"
            >
              <BsFillTelephoneFill size={18} />
              {contactInfo.phone.text}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
