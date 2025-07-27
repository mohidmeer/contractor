import Link from 'next/link'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'

type ArrowLinkProps = {
  href: string
  label: string
  style?: 'primary' | 'secondary'
}

const ArrowLink = ({ href, label, style = 'primary' }: ArrowLinkProps) => {
  return (
    <Link href={href} className={`btn-${style} w-fit flex items-center gap-2 group`}>
      {label}
      <MdArrowForward className="group-hover:translate-x-2 transition-all" />
    </Link>
  )
}

export default ArrowLink