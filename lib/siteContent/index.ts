/** Client-safe site content exports (no Node/fs/prisma). */
export { SiteContentSchema, SITE_CONTENT_ID, type SiteContent } from "./schema";
export {
  resolveSiteIcon,
  iconKeyFromComponent,
  SITE_CONTENT_ICON_OPTIONS,
} from "./icons";
export { SiteContentProvider, useSiteContent } from "./provider";
