"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import type { ServiceView } from "@/actions/services";

function isWideCard(index: number) {
  const pairIndex = Math.floor(index / 2);
  const isSecondInPair = index % 2 === 1;
  const bigOnLeft = pairIndex % 2 === 0;
  return bigOnLeft ? !isSecondInPair : isSecondInPair;
}

type ServicesMasonryGridProps = {
  items: ServiceView[];
  ctaLabel?: string;
  /** Which field to show as the card heading */
  titleField?: "title" | "label";
};

export default function ServicesMasonryGrid({
  items,
  ctaLabel = "Learn more",
  titleField = "title",
}: ServicesMasonryGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 grid-flow-dense">
      {items.map((service, z) => {
        const isWideDefault = isWideCard(z);
        const siblingIndex = z % 2 === 1 ? z - 1 : z + 1;
        const siblingInBounds =
          siblingIndex >= 0 && siblingIndex < items.length;
        const isHovered = hoveredIndex === z;
        const siblingHovered =
          siblingInBounds && hoveredIndex === siblingIndex;

        // Same row: small → 2 cols, paired large → 1 col
        let colSpan = isWideDefault ? 2 : 1;
        if (!isWideDefault && isHovered) colSpan = 2;
        if (
          isWideDefault &&
          siblingHovered &&
          siblingInBounds &&
          !isWideCard(siblingIndex)
        ) {
          colSpan = 1;
        }

        const isExpanded = colSpan === 2;

        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            onMouseEnter={() => setHoveredIndex(z)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={[
              "group relative flex overflow-hidden rounded-2xl bg-white shadow-lg hover:bg-primary hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300",
              isExpanded
                ? "md:col-span-2 flex-col md:flex-row"
                : "md:col-span-1 flex-col",
            ].join(" ")}
          >
            <div
              className={[
                "relative overflow-hidden shrink-0 transition-all duration-300",
                isExpanded
                  ? "h-[220px] md:h-auto md:min-h-[260px] md:w-[45%]"
                  : "h-[200px] md:h-[220px] w-full",
              ].join(" ")}
            >
              {service.imageUrl ? (
                <Image
                  src={service.imageUrl}
                  fill
                  sizes={
                    isExpanded
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={service.title || service.label}
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-primary/40 px-6 text-center">
                  {service.label}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-heading/85 via-heading/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30 group-hover:bg-white group-hover:text-primary transition-colors">
                  {String(z + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                className={[
                  "absolute left-3 right-3 transition-all duration-300",
                  isExpanded
                    ? "bottom-3 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
                    : "bottom-3",
                ].join(" ")}
              >
                {(service.category || titleField === "title") && (
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                    {service.category?.name ??
                      `Service ${String(z + 1).padStart(2, "0")}`}
                  </p>
                )}
                <h3
                  className={[
                    "font-bold text-white leading-snug drop-shadow-sm line-clamp-2",
                    isExpanded ? "text-lg md:text-xl" : "text-base md:text-lg",
                  ].join(" ")}
                >
                  {titleField === "label"
                    ? service.label
                    : service.title || service.label}
                </h3>
              </div>
            </div>

            <div
              className={[
                "relative flex flex-1 flex-col gap-3 p-4 md:p-5 transition-all duration-300",
                isExpanded ? "md:justify-center md:p-7 md:gap-4" : "",
              ].join(" ")}
            >
              <p
                className={[
                  "p1 !text-gray-600 group-hover:!text-white/90 transition-colors",
                  isExpanded
                    ? "line-clamp-4 md:line-clamp-5"
                    : "line-clamp-3",
                ].join(" ")}
              >
                {service.description}
              </p>
              <div className="mt-auto flex items-center justify-between pt-1">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-secondary group-hover:gap-2.5 transition-all">
                  {ctaLabel}
                  <MdArrowForward className="text-base transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="h-8 w-8 rounded-full bg-primary/10 group-hover:bg-white/15 flex items-center justify-center text-primary group-hover:text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <MdArrowForward className="text-sm" />
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-300" />
          </Link>
        );
      })}
    </div>
  );
}
