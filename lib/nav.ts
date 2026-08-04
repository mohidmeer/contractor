import type { NavItem } from "@/types";

/** Flatten nested nav groups into leaf links (for footer / sidebar). */
export function flattenNavLeaves(items: NavItem[]): NavItem[] {
  const out: NavItem[] = [];
  for (const item of items) {
    if (item.children?.length) {
      out.push(...flattenNavLeaves(item.children));
    } else {
      out.push(item);
    }
  }
  return out;
}

export function isNavGroup(item: NavItem) {
  return Boolean(item.hasChildrens && item.children?.length);
}
