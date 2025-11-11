import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex text-white justify-between p-6'>
        <div>
            <h2 className='font-bold text-lg'>🌐 FS Portfolio</h2>
        </div>

        <div className='hidden md:flex'>
            <ul className='flex gap-8 text-md'>
                <li className='hover:underline hover:decoration-blue-500 underline-offset-4'><Link href="/">Home</Link></li>
                <li className='hover:underline hover:decoration-blue-500 underline-offset-4'><Link href="#about">About</Link></li>
                <li className='hover:underline hover:decoration-blue-500 underline-offset-4'><Link href="#services">Services</Link></li>
                <li className='hover:underline hover:decoration-blue-500 underline-offset-4'><Link href="#projects">Projects</Link></li>
                <li className='hover:underline hover:decoration-blue-500 underline-offset-4'><Link href="#contact">Contact</Link></li>
            </ul>
        </div>

        <div className='md:hidden'>
             <Sheet>
                <SheetTrigger><MenuIcon /></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='py-4 text-xl font-bold'>Welcome!🤗</SheetTitle>
                        <ul className='flex flex-col gap-4 p-2 font-semibold'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#services">Services</Link></li>
                            <li><Link href="#projects">Projects</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </SheetHeader>
                </SheetContent>
             </Sheet>
        </div>
    </div>
  )
}

export default Navbar