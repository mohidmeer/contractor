import { getDynamicNavItems } from '@/actions/nav'
import SideBarPanels from '@/components/SideBarPanels'
import type { NavItem } from '@/types'

function findNavItem(items: NavItem[], label: string, href: string) {
    return items.find(
        (item) =>
            item.label.toLowerCase() === label ||
            item.href.replace(/\/+$/, '') === href
    )
}

function serviceGroups(children: NavItem[] = []): NavItem[] {
    const grouped = children.filter(
        (child) => child.hasChildrens && (child.children?.length ?? 0) > 0
    )
    if (grouped.length > 0) return grouped
    if (children.length === 0) return []
    return [
        {
            label: 'Services',
            href: '/services',
            hasChildrens: true,
            children,
        },
    ]
}

const SideBar = async () => {
    const items = await getDynamicNavItems()
    const services = findNavItem(items, 'services', '/services')
    const projects = findNavItem(items, 'projects', '/projects')

    return (
        <SideBarPanels
            serviceGroups={serviceGroups(services?.children)}
            projects={projects?.children ?? []}
        />
    )
}

export default SideBar
