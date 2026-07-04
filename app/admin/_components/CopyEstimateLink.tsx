"use client";

import { Link2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { siteUrl } from "@/data";

type CopyEstimateLinkProps = {
  token: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "icon";
  showLabel?: boolean;
};

export function getEstimatePublicUrl(token: string) {
  const base = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  return `${base}estimate/${token}`;
}

export default function CopyEstimateLink({
  token,
  variant = "outline",
  size = "sm",
  showLabel = true,
}: CopyEstimateLinkProps) {
  const url = getEstimatePublicUrl(token);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Public estimate link copied");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <Button type="button" variant={variant} size={size} onClick={handleCopy}>
      <Link2 className="h-4 w-4" />
      {showLabel && <span>Copy link</span>}
    </Button>
  );
}
