export type Routes = {
  auth: {
    signIn: string
    signUp: string
    forgotPassword: string
  }
  public: {
    home: string
    about: string
    explore: string
    pricing: string
    contact: string
    news: string
    help: string
    notFound: string
    userID: (userID: string) => string
    listingDetails: (slug: string) => string
  }
  private: {
    addListing: string
    dashboard: string
    inbox: string
    listings: string
    reservations: string
    accountSettings: string
    trips: string
    wishlist: string
  }
}

export type RouteType = keyof Routes['auth'] | keyof Routes['public']

export const routes: Routes = {
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    forgotPassword: '/forgot-password',
  },
  public: {
    home: '/',
    about: '/about',
    explore: '/explore',
    pricing: '/pricing',
    contact: '/contact',
    news: '/news',
    help: '/help',
    notFound: '/404',
    userID: (userID: string) => `/user/${userID}`,
    listingDetails: (slug: string) => `/listing/${slug}`,
  },
  private: {
    addListing: '/add-listing',
    dashboard: '/account',
    inbox: '/account/inbox',
    listings: '/account/listings',
    reservations: '/account/reservations',
    accountSettings: '/account/settings',
    trips: '/trips',
    wishlist: '/wishlist',
  },
}
