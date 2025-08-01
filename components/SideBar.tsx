import { navItems } from '@/data/constants'
import { NavItem } from '@/types'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
    return (
        <>
            <div className='bg-white p-5 shadow-md border border-primary/30 rounded-md'>
                <h4 className='!text-xl font-bold'>Our Servives</h4>
                <ul className='list-disc  marker:bg-primary pl-4 marker:text-primary'>
                    {(navItems[1].children as NavItem[]).map((child) => (
                        <li key={child.label}>
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

            <div className='bg-white p-5 shadow-md border border-primary/30 rounded-md'>
                <h4 className='!text-xl font-bold'>Our Projects</h4>
                <ul className='list-disc  marker:bg-primary pl-4 marker:text-primary'>
                    {(navItems[2].children as NavItem[]).map((child) => (
                        <li key={child.label}>
                            <Link
                                href={child.href}
                                className="block  py-1  hover:text-primary"
                            >
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </>

    )
}

export default SideBar
