import Title from "@/components/inputs/Title";
import ServicesMasonryGrid from "@/components/ServicesMasonryGrid";
import { getServices } from "@/actions/services";

type ServicesListSectionProps = {
  title?: string;
  heading?: string;
  description?: string;
  /** Section background — alternate with neighboring sections */
  tone?: "tint" | "white";
  ctaLabel?: string;
  titleField?: "title" | "label";
  limit?: number;
  showHeader?: boolean;
};

export default async function ServicesListSection({
  title = "Our Services",
  heading = "What we deliver",
  description,
  tone = "tint",
  ctaLabel = "View service",
  titleField = "label",
  limit,
  showHeader = true,
}: ServicesListSectionProps) {
  const services = await getServices();
  const items = limit ? services.slice(0, limit) : services;
  const bg = tone === "white" ? "bg-white" : "bg-secondary/10";

  return (
    <section className={`${bg} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {showHeader && (
          <div className="mb-10 flex flex-col gap-3 max-w-2xl">
            <Title text={title} />
            <h2 className="text-heading">{heading}</h2>
            {description ? <p className="p1">{description}</p> : null}
          </div>
        )}

        <ServicesMasonryGrid
          items={items}
          ctaLabel={ctaLabel}
          titleField={titleField}
        />
      </div>
    </section>
  );
}
