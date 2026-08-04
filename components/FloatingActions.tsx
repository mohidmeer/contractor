"use client";

import CallButton from "@/components/CallButton";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-10 right-5 z-40 flex items-center gap-3">
      <CallButton />
      <ChatbotWidget />
    </div>
  );
}
