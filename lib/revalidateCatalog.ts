import { revalidateTag } from "next/cache";

export function revalidateServicesCache() {
  revalidateTag("services");
  revalidateTag("nav");
}

export function revalidateProjectsCache() {
  revalidateTag("projects");
  revalidateTag("nav");
}
