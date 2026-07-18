import type { ReactNode } from "react";

type SectionShadowHeadingProps = {
  shadow: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Faded watermark label behind section headings */
export default function SectionShadowHeading({
  shadow,
  children,
  align = "left",
  className = "",
}: SectionShadowHeadingProps) {
  return (
    <div
      className={[
        "relative",
        align === "center" ? "flex flex-col items-center text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute top-0 select-none text-[clamp(2.25rem,7vw,4rem)] font-bold leading-none tracking-tight text-primary/[0.07]",
          align === "center" ? "left-1/2 -translate-x-1/2" : "left-0",
        ].join(" ")}
      >
        {shadow}
      </span>
      <div className="relative pt-7 md:pt-8 flex flex-col gap-2 w-full">
        {children}
      </div>
    </div>
  );
}
