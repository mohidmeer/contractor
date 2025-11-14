import React from 'react'

const Title = ({ text }: { text: string }) => {
  return (
    <p className='flex items-center gap-1'>
      <span className='bg-primary w-6 h-1 block'></span>
      <span className='font-bold '>{text}</span>
    </p>
  )
}

export default Title
