import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import prisma from "@/lib/prisma";
import { contactInfo, enable_estimates, siteName } from "@/data";
import { formatCurrency } from "@/lib/utils";
import { serializeEstimate } from "@/lib/estimateHelpers";

type Props = {
  params: Promise<{ token: string }>;
};

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

  return (
    <main className="flex flex-col gap-10">
      <Header cta desc="" title={estimate.title} />

      <section className="container mx-auto px-4 pb-12">
        <div className="card mx-auto max-w-4xl rounded-xl bg-white p-6 sm:p-8">
          <div className="mb-6 flex flex-col gap-2 border-b border-primary/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary">
                Estimate
              </p>
              <h2 className="text-heading text-2xl font-semibold">
                {estimate.title}
              </h2>
              <p className="mt-1 text-gray-600">
                Prepared for {estimate.clientName}
              </p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              {estimate.status}
            </span>
          </div>

          {estimate.description && (
            <p className="mb-6 whitespace-pre-wrap text-gray-700">
              {estimate.description}
            </p>
          )}

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-b border-primary/10 text-heading">
                <tr>
                  <th className="px-2 py-3 font-semibold">Item</th>
                  <th className="px-2 py-3 font-semibold">Qty</th>
                  <th className="px-2 py-3 font-semibold">Unit price</th>
                  <th className="px-2 py-3 text-right font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {estimate.items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="px-2 py-3 align-top">
                      <div className="font-medium text-heading">{item.name}</div>
                      {item.description && (
                        <div className="mt-1 text-gray-600">
                          {item.description}
                        </div>
                      )}
                    </td>
                    <td className="px-2 py-3 align-top">{item.quantity}</td>
                    <td className="px-2 py-3 align-top">
                      {formatCurrency(item.unitPrice)}
                    </td>
                    <td className="px-2 py-3 text-right align-top font-medium">
                      {formatCurrency(item.subtotal)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-4">
            <p className="text-lg font-semibold text-heading">Grand total</p>
            <p className="text-2xl font-bold text-primary">
              {formatCurrency(estimate.total)}
            </p>
          </div>

          {estimate.notes && (
            <div className="mt-8 rounded-lg bg-secondary/5 p-4">
              <p className="mb-2 font-semibold text-heading">Notes</p>
              <p className="whitespace-pre-wrap text-gray-700">{estimate.notes}</p>
            </div>
          )}

          <div className="mt-8 rounded-lg border border-primary/10 p-4">
            <p className="font-semibold text-heading">Questions about this estimate?</p>
            <p className="mt-1 text-gray-700">
              Call{" "}
              <a
                href={contactInfo.phone.href}
                className="font-medium text-primary hover:underline"
              >
                {contactInfo.phone.text}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-medium text-primary hover:underline"
              >
                {contactInfo.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
