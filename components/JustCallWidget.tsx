"use client";

import { startJustCallOverrides } from "@/lib/justCallOverrides";
import Script from "next/script";

type JustCallWidgetProps = {
  uhash: string;
};

declare global {
  interface Window {
    justcall?: { init: () => void };
    resizeTheframe?: () => void;
    removeSettings?: () => void;
  }
}

export default function JustCallWidget({ uhash }: JustCallWidgetProps) {
  const src = `https://cdn.justcall.io/app/assets/js/justcall.js?uhash=${uhash}`;

  return (
    <Script
      id="justcall-ajs"
      src={src}
      strategy="afterInteractive"
      onLoad={() => {
        try {
          startJustCallOverrides();
          window.justcall?.init();
        } catch (e) {
          console.error("JustCall init failed", e);
        }
      }}
    />
  );
}
