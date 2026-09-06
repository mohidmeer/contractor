import { revalidatePath, revalidateTag } from "next/cache";

export function revalidateServicesCache() {
  revalidateTag("services");
  revalidateTag("nav");
}

export function revalidateProjectsCache() {
  revalidateTag("projects");
  revalidateTag("nav");
}

export function revalidateCategoriesCache() {
  revalidateTag("categories");
  revalidateTag("services");
  revalidateTag("nav");
}

export function revalidateSiteContentCache() {
  revalidateTag("site-content");
  // Homepage + service-area routes depend on the site-content document
  // (testimonials, city pages / paths, listing).
  revalidatePath("/", "layout");
  revalidatePath("/service-areas", "layout");
}
