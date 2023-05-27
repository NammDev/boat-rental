'use client'

import Link from 'next/link'

import { menuItems } from '@/config/footer'
import { cn } from '@/lib/utils'

export default function Footer({ className }: { className?: string }) {
  return (
    <footer>
      <div className={cn('container-fluid mb-4', className)}>
        <div className='flex flex-col md:mb-6 md:flex-row md:items-center md:justify-between md:border-t md:border-t-gray-lighter md:pt-6 lg:mb-8 lg:pt-8'>
          <div className='order-2 pt-4 md:order-none md:pt-0 lg:shrink-0'>
            <p className='text-sm font-normal leading-6 text-center capitalize text-gray-dark md:text-left 3xl:text-base'>
              Copyright &copy; {new Date().getFullYear()}{' '}
              <a
                href='https://redq.io/'
                rel='noreferrer noopener'
                target='_blank'
                className='font-semibold hover:underline'
              >
                RedQ Inc.
              </a>{' '}
              All rights reserved
            </p>
          </div>
          <nav className='order-1 pb-4 border-b border-gray-lighter md:order-none md:border-b-0 md:pb-0'>
            <ul className='flex flex-wrap items-center justify-center md:justify-end'>
              {menuItems.map((item) => (
                <li key={item.label} className='px-4 first:pl-0 last:pr-0 lg:px-6'>
                  <Link
                    href={item.path}
                    className='block text-sm font-normal leading-4 capitalize text-primary 3xl:text-base'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
