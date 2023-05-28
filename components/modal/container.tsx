'use client'

import { cn } from '@/lib/utils'
import { useModal } from './useModal'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import Button from '../ui/button'
import { usePathname } from 'next/navigation'
import renderModalContent from './content'

export default function ModalContainer() {
  const { open, view, closeModal } = useModal()
  const pathName = usePathname()
  useEffect(() => {
    closeModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName])
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as='div'
        className={cn(
          'fixed inset-0 z-[9999] h-full w-full overflow-y-auto overflow-x-hidden bg-gray-dark bg-opacity-40 p-4 text-center',
          { '!bg-opacity-100': view === 'LIGHT_GALLERY' }
        )}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 z-[9999] cursor-pointer bg-black bg-opacity-30' />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        {view && view !== 'SEARCH_MODAL' && (
          <span className='inline-block h-full align-middle' aria-hidden='true'>
            &#8203;
          </span>
        )}

        {/* This element is need to fix FocusTap headless-ui warning issue */}
        <div className='sr-only'>
          <Button size='sm' onClick={closeModal} className='opacity-50 hover:opacity-80 '>
            <span></span>
          </Button>
        </div>

        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-105'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-105'
        >
          <div className='relative z-[9999] inline-block w-full text-left align-middle sm:w-auto'>
            {view && renderModalContent(view)}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
