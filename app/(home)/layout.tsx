import Footer from '@/components/footer/footer'
import TransparentHeader from '@/components/header/transparent'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TransparentHeader />
      <main className='flex-grow'>{children}</main>
      <Footer />
      {/* <MobileNav /> */}
    </>
  )
}
