import { revalidateTag } from "next/cache";
import { getSite } from "@/lib/site";

export function revalidateServicesCache(site = getSite()) {
  revalidateTag(`services-${site}`);
  revalidateTag("services");
  revalidateTag(`nav-${site}`);
  revalidateTag("nav");
}

export function revalidateProjectsCache(site = getSite()) {
  revalidateTag(`projects-${site}`);
  revalidateTag("projects");
  revalidateTag(`nav-${site}`);
  revalidateTag("nav");
}
