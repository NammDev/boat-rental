'use client'

import Link from 'next/link'
import { menuItems } from '@/config/footer'
import { useModal } from '../modal/useModal'

export default function Menu() {
  const { openModal } = useModal()
  const isAuthorized = false

  return (
    <nav className='items-center justify-between hidden primary-nav md:flex'>
      <ul className='flex-wrap hidden md:flex'>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className='px-5 text-white capitalize'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {isAuthorized ? (
        <div className='flex justify-end ml-7'>
          {/* <ProfileMenu className='hidden md:block' /> */}
        </div>
      ) : (
        <button
          onClick={() => openModal('SIGN_IN')}
          className='ml-5 rounded-lg px-6 py-2 text-sm capitalize md:text-base 4xl:px-8 4xl:py-2.5'
        >
          Log in
        </button>
      )}
    </nav>
  )
}
