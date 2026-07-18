import { getDynamicNavItems } from '@/actions/nav'
import type { NavItem } from '@/types'
import Link from 'next/link'
import React from 'react'
import { MdArrowForward, MdBuild, MdFolder } from 'react-icons/md'

const SideBar = async () => {
    const items = await getDynamicNavItems()
    const services =
        items.find(
            (item) =>
                item.label.toLowerCase() === 'services' ||
                item.href.replace(/\/+$/, '') === '/services'
        )?.children ?? []
    const projects =
        items.find(
            (item) =>
                item.label.toLowerCase() === 'projects' ||
                item.href.replace(/\/+$/, '') === '/projects'
        )?.children ?? []

    return (
        <>
            {services.length > 0 && (
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-primary/10">
                    <div className="bg-primary px-5 py-4 flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
                            <MdBuild className="text-lg" />
                        </span>
                        <h4 className="!text-base font-bold !text-white m-0">Our Services</h4>
                    </div>
                    <ul className="p-2">
                        {(services as NavItem[]).map((child) => (
                            <li key={child.href}>
                                <Link
                                    href={child.href}
                                    className="group flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-heading hover:bg-primary hover:text-white transition-all"
                                >
                                    <span className="leading-snug">{child.label}</span>
                                    <MdArrowForward className="shrink-0 text-primary/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 pb-4">
                        <Link
                            href="/services"
                            className="group flex items-center justify-center gap-1.5 rounded-xl bg-secondary/15 px-3 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all"
                        >
                            View all services
                            <MdArrowForward className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            )}
            {projects.length > 0 && (
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-primary/10">
                    <div className="bg-primary px-5 py-4 flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
                            <MdFolder className="text-lg" />
                        </span>
                        <h4 className="!text-base font-bold !text-white m-0">Our Projects</h4>
                    </div>
                    <ul className="p-2">
                        {(projects as NavItem[]).map((child) => (
                            <li key={child.href}>
                                <Link
                                    href={child.href}
                                    className="group flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-heading hover:bg-primary hover:text-white transition-all"
                                >
                                    <span className="leading-snug">{child.label}</span>
                                    <MdArrowForward className="shrink-0 text-primary/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 pb-4">
                        <Link
                            href="/projects"
                            className="group flex items-center justify-center gap-1.5 rounded-xl bg-secondary/15 px-3 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all"
                        >
                            View all projects
                            <MdArrowForward className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default SideBar
