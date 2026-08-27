import { toMediaUrl } from "@/lib/media";
import type { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";

type BlogSection = Blog["content"][number];
type MediaSplit = NonNullable<BlogSection["mediaSplit"]>;

function calloutToneClasses(tone: "tip" | "note" | "warning") {
  if (tone === "tip") {
    return "border-emerald-600/70 bg-emerald-50/90 text-heading";
  }
  if (tone === "warning") {
    return "border-amber-500/80 bg-amber-50/90 text-heading";
  }
  return "border-primary/70 bg-secondary/20 text-heading";
}

export function BlogBody({ children }: { children: ReactNode }) {
  return (
    <p className="text-base md:text-lg leading-[1.75] text-heading/85">
      {children}
    </p>
  );
}

export function BlogList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-base md:text-[1.0625rem] text-heading/90"
        >
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm shadow-primary/25">
            <FaCheck size={9} />
          </span>
          <span className="font-medium leading-snug pt-0.5">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BlogQuote({ text, compact = false }: { text: string; compact?: boolean }) {
  return (
    <blockquote
      className={
        compact
          ? "rounded-2xl border-l-[3px] border-secondary bg-secondary/10 px-5 py-4 text-base italic leading-relaxed text-heading/90"
          : "rounded-2xl border-l-[3px] border-secondary bg-secondary/10 px-6 py-5 md:px-8 md:py-6 text-lg md:text-xl italic font-medium leading-relaxed text-heading"
      }
    >
      “{text}”
    </blockquote>
  );
}

export function BlogTable({ rows }: { rows: string[][] }) {
  if (!rows.length) return null;
  return (
    <div className="overflow-x-auto rounded-2xl border border-primary/10 shadow-sm shadow-primary/5">
      <table className="min-w-full border-collapse text-sm md:text-[0.9375rem]">
        <thead>
          <tr className="bg-primary text-white">
            {rows[0].map((cell, colIndex) => (
              <th
                key={colIndex}
                scope="col"
                className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.08em]"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        {rows.length > 1 && (
          <tbody>
            {rows.slice(1).map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0 ? "bg-secondary/10" : "bg-white"
                }
              >
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className="border-b border-primary/5 px-4 py-3 text-heading/90"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export function BlogCallout({
  text,
  tone,
}: {
  text: string;
  tone: "tip" | "note" | "warning";
}) {
  return (
    <aside
      className={`rounded-2xl border-l-[3px] px-5 py-5 md:px-6 md:py-6 ${calloutToneClasses(tone)}`}
    >
      <p className="mb-2 text-sm md:text-base font-bold uppercase tracking-[0.14em] text-heading/60">
        {tone}
      </p>
      <p className="text-base md:text-lg font-medium leading-relaxed text-heading/90">
        {text}
      </p>
    </aside>
  );
}

export function BlogCta({ label, href }: { label: string; href: string }) {
  return (
    <div className="pt-1">
      <Link href={href} className="btn-primary inline-flex">
        {label}
      </Link>
    </div>
  );
}

export function BlogFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string | null;
}) {
  return (
    <figure className="-mx-1 overflow-hidden rounded-2xl bg-primary/[0.03] sm:mx-0">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover"
          unoptimized
        />
      </div>
      {caption ? (
        <figcaption className="px-4 py-3.5 text-center text-sm leading-relaxed text-heading/60">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function BlogMediaSplit({
  split,
  fallbackAlt,
}: {
  split: MediaSplit;
  fallbackAlt: string;
}) {
  const splitUrl = toMediaUrl(split.image);
  if (!splitUrl) return null;
  const imageFirst = split.side !== "right";

  return (
    <div
      className={`grid gap-8 md:grid-cols-2 md:items-center ${
        imageFirst ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary/5 shadow-sm shadow-primary/10">
        <Image
          src={splitUrl}
          alt={split.heading || fallbackAlt}
          fill
          sizes="(max-width: 768px) 100vw, 35vw"
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="min-w-0 space-y-5">
        {split.heading ? (
          <h4 className="!text-xl md:!text-2xl font-bold tracking-tight text-heading">
            {split.heading}
          </h4>
        ) : null}
        {split.paragraph ? <BlogBody>{split.paragraph}</BlogBody> : null}
        {split.listItems && split.listItems.length > 0 ? (
          <BlogList items={split.listItems} />
        ) : null}
        {split.table && split.table.length > 0 ? (
          <BlogTable rows={split.table} />
        ) : null}
        {split.quote ? <BlogQuote text={split.quote} compact /> : null}
        {split.cta?.label && split.cta?.href ? (
          <BlogCta label={split.cta.label} href={split.cta.href} />
        ) : null}
      </div>
    </div>
  );
}

export function BlogSectionBlocks({
  section,
  postTitle,
}: {
  section: BlogSection;
  postTitle: string;
}) {
  const body = section.paragraph ?? section.body;
  const figureUrl = section.imageFigure?.image
    ? toMediaUrl(section.imageFigure.image)
    : "";

  return (
    <div className="space-y-5">
      {body ? <BlogBody>{body}</BlogBody> : null}
      {section.listItems && section.listItems.length > 0 ? (
        <BlogList items={section.listItems} />
      ) : null}
      {section.quote ? <BlogQuote text={section.quote} /> : null}
      {section.table && section.table.length > 0 ? (
        <BlogTable rows={section.table} />
      ) : null}
      {section.callout ? (
        <BlogCallout text={section.callout.text} tone={section.callout.tone} />
      ) : null}
      {section.cta?.label && section.cta?.href ? (
        <BlogCta label={section.cta.label} href={section.cta.href} />
      ) : null}
      {figureUrl ? (
        <BlogFigure
          src={figureUrl}
          alt={section.imageFigure?.caption || section.heading || postTitle}
          caption={section.imageFigure?.caption}
        />
      ) : null}
      {section.mediaSplit ? (
        <BlogMediaSplit
          split={section.mediaSplit}
          fallbackAlt={section.heading || postTitle}
        />
      ) : null}
    </div>
  );
}
