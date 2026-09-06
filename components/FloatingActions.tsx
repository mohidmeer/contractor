"use client";

import CallButton from "@/components/CallButton";
import ChatbotWidget from "@/components/ChatbotWidget";
import { useSiteContent } from "@/lib/siteContent";

export default function FloatingActions() {
  const { justCall } = useSiteContent();
  return (
    <div
      className="fixed bottom-10 right-5 z-40 flex items-center gap-3"
      data-floating-actions
    >
      <CallButton useJustCall={justCall?.enabled} />
      <ChatbotWidget />
    </div>
  );
}
