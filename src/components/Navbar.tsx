'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Truck } from 'lucide-react'
import Logo from '../../public/uploads/logo.png'
import Image from 'next/image'
export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-2'>
              <Image
                src={Logo}
                alt={'KASP'}
 className="h-15 w-auto object-contain"              />
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-gray-700 hover:text-pink-600 transition-colors font-medium'
            >
              Home
            </Link>
            <Link
              href='/products'
              className='text-gray-700 hover:text-pink-600 transition-colors font-medium'
            >
              Products
            </Link>
            <Link
              href='/contact'
              className='text-gray-700 hover:text-pink-600 transition-colors font-medium'
            >
              Contact
            </Link>
            <a
              href='mailto:sales@kasp.co.in'
              className='bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium'
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 hover:text-pink-600 transition-colors'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t'>
              <Link
                href='/'
                className='block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium'
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/products'
                className='block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium'
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href='/contact'
                className='block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium'
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href='mailto:sales@kasp.co.in'
                className='block px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium text-center'
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
