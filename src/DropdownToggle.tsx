import { createElement, ElementType, PropsWithChildren } from 'react'
import { useDropdownContext } from './Dropdown'

interface DropdownToggleProps {
  /**
   * The element or component to render as dropdown item
   */
  as?: ElementType
  /**
   * Additional classes to override default style
   */
  className?: string
  /**
   * Additional props if custom component is used for dropdown toggle
   */
  [prop: string]: any
}

function DropdownToggle({
  children,
  as = 'button',
  className = '',
  ...other
}: PropsWithChildren<DropdownToggleProps>) {
  const { isOpen, toggleDropdown } = useDropdownContext()

  return createElement(
    as,
    {
      'aria-expanded': isOpen ? 'true' : undefined,
      'aria-haspopup': 'true',
      className,
      onClick: toggleDropdown,
      ...(as !== 'button' && { role: 'button' }),
      ...other,
    },
    children
  )
}

export default DropdownToggle
