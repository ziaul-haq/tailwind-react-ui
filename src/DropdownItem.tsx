import React, {
  createElement,
  ElementType,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
} from 'react'
import clsx from 'clsx'
import { useDropdownContext } from './Dropdown'

export interface DropdownItemProps {
  /**
   * The element or component to render as dropdown item
   */
  as?: ElementType
  /**
   * Additional classes to override default style
   */
  className?: string
  /**
   * Whether or not dropdown item should be disabled
   */
  disabled?: boolean
  /**
   * HTML attribute if item is rendered as anchor
   */
  href?: string
  /**
   * Callback when item is clicked
   */
  onClick?: MouseEventHandler
  /**
   * Additional props if custom component is used for dropdown item
   */
  [prop: string]: any
}

const DropdownItem = ({
  children,
  as = 'button',
  className = '',
  disabled = false,
  onClick,
  ...other
}: PropsWithChildren<DropdownItemProps>) => {
  const { closeDropdown } = useDropdownContext()

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }

    closeDropdown()

    if (onClick) {
      onClick(event)
    }
  }

  const itemClasses = clsx(
    'inline-flex items-center cursor-pointer w-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
    disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-200',
    className
  )

  return (
    <li role="none">
      {createElement(
        as,
        {
          'aria-disabled': disabled ? 'true' : undefined,
          className: itemClasses,
          disabled,
          onClick: handleClick,
          role: 'menuitem',
          tabIndex: -1,
          ...other,
        },
        children
      )}
    </li>
  )
}

export default DropdownItem
