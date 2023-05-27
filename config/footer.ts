import { RouteType, routes } from '@/config/routes'

export type MenuItem = {
  label: string
  path: RouteType | string
}

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    path: routes.auth.signIn,
  },
  {
    label: 'Explore',
    path: routes.public.explore,
  },
  {
    label: 'Pricing',
    path: routes.public.pricing,
  },
  {
    label: 'Help',
    path: routes.public.help,
  },
]
