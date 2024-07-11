'use client'

import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Yashika', lastName: 'Agnihotri'}

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        <div className='flex size-full flex-col'>
          <div className='root-layout'>
            <Image src='/icons/mylogo.svg'
              width={30} height={30}
              alt='logo'
            />
            <div>
              <MobileNav user={ loggedIn} />
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
