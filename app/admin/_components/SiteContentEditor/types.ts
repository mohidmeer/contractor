import type { Dispatch, SetStateAction } from "react";
import type { SiteContent } from "@/lib/siteContent";

export type SiteContentSectionProps = {
  data: SiteContent;
  setData: Dispatch<SetStateAction<SiteContent | null>>;
};
