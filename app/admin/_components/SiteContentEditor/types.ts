import type { Dispatch, SetStateAction } from "react";
import type { SiteContent } from "@/lib/siteContent";

export type SiteContentSectionProps = {
  data: SiteContent;
  setData: Dispatch<SetStateAction<SiteContent | null>>;
  /** Section ids expanded after an AI apply (see PATCH_KEY_TO_SECTION_ID). */
  forceOpenSections?: ReadonlySet<string>;
  forceOpenKey?: number;
};
