import { getDynamicNavItems } from '@/actions/nav'
import type { NavItem } from '@/types'
import Link from 'next/link'
import React from 'react'

const SideBar = async () => {
    const items = await getDynamicNavItems()
    const services =
        items.find((item) => item.label === 'Services')?.children ?? []
    const projects =
        items.find((item) => item.label === 'Projects')?.children ?? []

    return (
        <>
            {services.length > 0 && (
                <div className='bg-white p-5 shadow-md border border-primary/30 rounded-md'>
                    <h4 className='!text-xl font-bold'>Our Servives</h4>
                    <ul className='list-disc  marker:bg-primary pl-4 marker:text-primary'>
                        {(services as NavItem[]).map((child) => (
                            <li key={child.href}>
                                <Link
                                    href={child.href}
                                    className="block py-1  hover:text-primary hover:underline"
                                >
                                    {child.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {projects.length > 0 && (
            <div className='bg-white p-5 shadow-md border border-primary/30 rounded-md'>
                <h4 className='!text-xl font-bold'>Our Projects</h4>
                <ul className='list-disc  marker:bg-primary pl-4 marker:text-primary'>
                    {(projects as NavItem[]).map((child) => (
                        <li key={child.href}>
                            <Link
                                href={child.href}
                                className="block  py-1  hover:text-primary"
                            >
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>)}

        </>

    )
}

export default SideBar
