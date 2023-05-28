import dynamic from 'next/dynamic'
import { MODAL_VIEW } from './useModal'

// dynamic imports
const SignIn = dynamic(() => import('@/components/auth/sign-in'))
// const SignUp = dynamic(() => import('@/components/auth/sign-up'))
// const AddReview = dynamic(() => import('@/components/ui/modals/add-review'))
// const ReportListing = dynamic(() => import('@/components/ui/modals/report-listing'))
// const ContactHost = dynamic(() => import('@/components/ui/modals/contact-host'))
// const ShareModal = dynamic(() => import('@/components/ui/modals/share-modal'))
// const Searchbox = dynamic(() => import('@/components/ui/search-box'))

export default function renderModalContent(view: MODAL_VIEW | string) {
  switch (view) {
    case 'SIGN_IN':
      return <SignIn className='!m-0 !p-0' />
    // case 'SIGN_UP':
    //   return <SignUp className='!m-0 !p-0' />
    // case 'ADD_REVIEW':
    //   return <AddReview />
    // case 'REPORT_LISTING':
    //   return <ReportListing />
    // case 'CONTACT_HOST':
    //   return <ContactHost />
    // case 'SHARE':
    //   return <ShareModal />
    // case 'SEARCH_MODAL':
    //   return <Searchbox className='mx-auto sm:min-w-[500px]' />
    default:
      return null
  }
}
