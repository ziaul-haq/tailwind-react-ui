import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'
import DropdownToggle from './DropdownToggle'

interface DropdownContextValue {
  isOpen: boolean
  toggleDropdown: () => void
  openDropdown: () => void
  closeDropdown: () => void
}

const DropdownContext = createContext<DropdownContextValue | null>(null)

export function useDropdownContext() {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error(
      "Dropdown context provider not found, make sure you're using dropdown components correctly."
    )
  }

  return context
}

function Dropdown(props: PropsWithChildren<{}>) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen)

  const openDropdown = () => setIsOpen(true)

  const closeDropdown = () => setIsOpen(false)

  const context = useMemo(
    () => ({
      isOpen,
      toggleDropdown,
      openDropdown,
      closeDropdown,
    }),
    [isOpen]
  )

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick, { capture: true })
      document.addEventListener('keydown', handleEsc, { capture: true })
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick, {
        capture: true,
      })
      document.removeEventListener('keydown', handleEsc, { capture: true })
    }
  }, [isOpen])

  return (
    <DropdownContext.Provider value={context}>
      <div ref={dropdownRef} className="relative">
        {props.children}
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.Item = DropdownItem
Dropdown.Menu = DropdownMenu
Dropdown.Toggle = DropdownToggle

export default Dropdown
