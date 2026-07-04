import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  FaEnvelope,
  FaFileInvoiceDollar,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Header from "@/components/Header";
import prisma from "@/lib/prisma";
import { contactInfo, enable_estimates, siteName } from "@/data";
import { serializeEstimate } from "@/lib/estimateHelpers";

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

  return (
    <main className="flex flex-col gap-10">
      <Header
        cta={false}
        title="Your Estimate"
        desc={`Prepared by ${siteName} for ${estimate.clientName}`}
      />

      <section className="container mx-auto px-4 pb-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          {/* Summary cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group flex items-start gap-4 rounded-xl border border-primary/10 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <FaFileInvoiceDollar size={22} />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500">Project</p>
                <p className="text-lg font-semibold text-heading">
                  {estimate.title}
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-xl border border-primary/10 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <FaUser size={22} />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500">
                  Prepared for
                </p>
                <p className="text-lg font-semibold text-heading">
                  {estimate.clientName}
                </p>
                {estimate.clientEmail && (
                  <p className="mt-1 break-all text-sm text-gray-600">
                    {estimate.clientEmail}
                  </p>
                )}
                {estimate.clientPhone && (
                  <p className="mt-1 text-sm text-gray-600">
                    {estimate.clientPhone}
                  </p>
                )}
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-xl border border-primary/10 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:col-span-2 lg:col-span-1">
              <div className="shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <FaFileInvoiceDollar size={22} />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500">Status</p>
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {statusLabel}
                </span>
                <p className="mt-2 text-sm text-gray-600">
                  {new Date(estimate.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Estimate details card */}
          <div className="card rounded-xl bg-white p-6 sm:p-8">
            <div className="mb-6 border-b border-primary/10 pb-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Estimate details
              </p>
              <h2 className="mt-2 text-heading">{estimate.title}</h2>
              {estimate.description && (
                <p className="p1 mt-3 whitespace-pre-wrap text-gray-700">
                  {estimate.description}
                </p>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left">
                <thead>
                  <tr className="border-b border-primary/15 text-heading">
                    <th className="px-3 py-3 text-sm font-semibold">Item</th>
                    <th className="px-3 py-3 text-sm font-semibold">Qty</th>
                    <th className="px-3 py-3 text-sm font-semibold">Unit price</th>
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
                        <p className="font-semibold text-heading">{item.name}</p>
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

          {/* Contact CTA — same public theme patterns */}
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
