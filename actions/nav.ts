import { unstable_cache } from "next/cache";
import { navItems } from "@/data";
import { getServices } from "@/actions/services";
import { getProjects } from "@/actions/projects";
import type { NavItem } from "@/types";

function toNavChild(label: string, href: string): NavItem {
  return {
    label,
    href,
    hasChildrens: false,
  };
}

function isServicesNav(item: NavItem) {
  return (
    item.label.toLowerCase() === "services" ||
    item.href.replace(/\/+$/, "") === "/services"
  );
}

function isProjectsNav(item: NavItem) {
  return (
    item.label.toLowerCase() === "projects" ||
    item.href.replace(/\/+$/, "") === "/projects"
  );
}

/**
 * Builds nav items with Services / Projects children from the DB.
 * Reuses getServices/getProjects caches — no extra DB hit on warm cache.
 */
export async function getDynamicNavItems(): Promise<NavItem[]> {
  return unstable_cache(
    async () => {
      const [services, projects] = await Promise.all([
        getServices(),
        getProjects(),
      ]);

      const serviceChildren = services.map((s) =>
        toNavChild(s.label || s.title, `/services/${s.slug}`)
      );
      const projectChildren = projects.map((p) =>
        toNavChild(p.label || p.title, `/projects/${p.slug}`)
      );

      return navItems.map((item) => {
        if (isServicesNav(item)) {
          return {
            ...item,
            hasChildrens: serviceChildren.length > 0,
            children: serviceChildren,
          };
        }
        if (isProjectsNav(item)) {
          return {
            ...item,
            hasChildrens: projectChildren.length > 0,
            children: projectChildren,
          };
        }
        return item;
      });
    },
    ["nav-items"],
    { tags: ["nav", "services", "projects"] }
  )();
}
