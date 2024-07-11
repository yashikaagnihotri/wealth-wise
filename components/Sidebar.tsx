'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Sidebar = ({user}:SiderbarProps) => {

  const pathname = usePathname();

  return (
    <section className='sidebar'>
      <nav className='flex flex-col'>
        <Link href='/' className='mb-10 cursor-pointer flex items-center gap-2'>
            <Image src='/icons/mylogo.svg' width={34} height={34} 
            alt='WealthWise Logo' className='size-[30px] max-xl:size-14' /> 
            {/* Yaha se logo ka size change hoga */}

            <h1 className='sidebar-logo'>WealthWise</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = 
          pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link href={item.route} 
              key={item.label}
              className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
            >
              <div className='relative size-6'>
                <Image src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn('sidebar-label whitespace-nowrap', {'!text-white':isActive})}>
                {item.label}
              </p>
            </Link>
          )
        })}
        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar
