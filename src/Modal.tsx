import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import Backdrop from './Backdrop'
import Transition from './Transition'
import styles from './themes/default'

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: () => void
  /**
   * Defines if the modal is open
   */
  isOpen: boolean
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, ref) {
  const { children, onClose, isOpen, ...other } = props

  const { modal } = styles

  const baseStyle = modal.base

  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, { capture: true })
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modalComponent = (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Backdrop onClick={onClose}>
        <Transition
          appear
          enter="transition-all ease-out duration-300"
          enterFrom="transform translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="transform translate-y-0 sm:scale-100"
          leave="transition-all ease-in duration-200"
          leaveFrom="transform translate-y-0 sm:scale-100"
          leaveTo="transform translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            className={baseStyle}
            role="dialog"
            onClick={(e) => e.stopPropagation()}
            ref={ref}
            {...other}
          >
            <FocusLock returnFocus>
              <header className="flex justify-end">
                <button
                  className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
                  aria-label="close"
                  onClick={onClose}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </header>
              {children}
            </FocusLock>
          </div>
        </Transition>
      </Backdrop>
    </Transition>
  )

  return mounted ? createPortal(modalComponent, document.body) : null
})

export default Modal
