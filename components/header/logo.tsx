import { routes } from '@/config/routes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { Icons } from '../icon'

export default function Logo({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={routes.public.home}
      className={cn(
        'brand-logo inline-flex w-full max-w-[120px] text-black focus:outline-none sm:text-white xl:max-w-[125px] 2xl:max-w-[135px] 3xl:max-w-[150px]',
        className
      )}
      {...props}
    >
      <Icons.logo className='w-full' />
    </Link>
  )
}
