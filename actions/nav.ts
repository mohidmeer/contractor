import { unstable_cache } from "next/cache";
import { navItems } from "@/data";
import { getServices, type ServiceView } from "@/actions/services";
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

function buildServiceNavChildren(services: ServiceView[]): NavItem[] {
  type Group = {
    label: string;
    sortOrder: number;
    items: NavItem[];
  };

  const groups = new Map<string, Group>();

  for (const service of services) {
    const key = service.category
      ? `cat-${service.category.id}`
      : "other";
    const label = service.category?.name ?? "Other";
    const sortOrder = service.category?.sortOrder ?? Number.MAX_SAFE_INTEGER;

    if (!groups.has(key)) {
      groups.set(key, { label, sortOrder, items: [] });
    }

    groups
      .get(key)!
      .items.push(
        toNavChild(service.label || service.title, `/services/${service.slug}`)
      );
  }

  return [...groups.values()]
    .sort((a, b) => {
      const aOther = a.label === "Other" ? 1 : 0;
      const bOther = b.label === "Other" ? 1 : 0;
      if (aOther !== bOther) return aOther - bOther;
      return a.sortOrder - b.sortOrder || a.label.localeCompare(b.label);
    })
    .map((group) => ({
      label: group.label,
      href: "/services",
      hasChildrens: true,
      children: group.items,
    }));
}

/**
 * Builds nav items with Services / Projects children from the DB.
 * Services are nested under category groups for the mega-menu.
 * Reuses getServices/getProjects caches — no extra DB hit on warm cache.
 */
export async function getDynamicNavItems(): Promise<NavItem[]> {
  return unstable_cache(
    async () => {
      const [services, projects] = await Promise.all([
        getServices(),
        getProjects(),
      ]);

      const serviceChildren = buildServiceNavChildren(services);
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
    ["nav-items-v4"],
    { tags: ["nav", "services", "projects", "categories"] }
  )();
}
