import React from 'react'
import clsx from 'clsx'
import FocusLock from 'react-focus-lock'
import { useDropdownContext } from './Dropdown'
import Transition from './Transition'

export interface DropdownMenuProps {
  children: React.ReactNode
  /**
   * Defines the alignement of the dropdown related to its parent
   */
  align?: 'left' | 'right'
  /**
   * Additional classes to override default styling
   */
  className?: string
}

function DropdownMenu({
  children,
  align = 'left',
  className = '',
}: DropdownMenuProps) {
  const { isOpen } = useDropdownContext()

  const menuClass = clsx(
    'absolute w-56 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5',
    align === 'left' ? 'left-0 origin-top-left' : 'right-0 origin-top-right',
    className
  )

  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <FocusLock autoFocus={false} returnFocus>
        <ul className={menuClass} role="menu">
          {children}
        </ul>
      </FocusLock>
    </Transition>
  )
}

export default DropdownMenu
