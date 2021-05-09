import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import FocusLock from 'react-focus-lock'
import styles from './themes/default'
import Transition from './Transition'

export interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: () => void
  /**
   * Defines if the dropdown is open
   */
  isOpen: boolean
  /**
   * Defines the alignement of the dropdown related to its parent
   */
  align?: 'left' | 'right'
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(function Dropdown(props, ref) {
  const { children, onClose, isOpen, className, align = 'left', ...other } = props
  const { dropdown } = styles

  const baseStyle = dropdown.base
  const alignStyle = dropdown.align[align]

  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose()
    }
  }

  const dropdownRef = useRef<HTMLUListElement>(null)
  function handleClickOutside(e: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, { capture: true })
    document.addEventListener('keydown', handleEsc, { capture: true })
    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true })
      document.removeEventListener('keydown', handleEsc, { capture: true })
    }
  }, [isOpen])

  const cls = clsx(baseStyle, alignStyle, className)

  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="opacity-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div ref={ref}>
        <FocusLock returnFocus>
          <ul className={cls} ref={dropdownRef} aria-label="submenu" {...other}>
            {children}
          </ul>
        </FocusLock>
      </div>
    </Transition>
  )
})

export default Dropdown
