import React, { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DropdownMenu from '../DropdownMenu'
import Dropdown from '../Dropdown'
import DropdownToggle from '../DropdownToggle'
import DropdownItem from '../DropdownItem'
import { suppressConsoleLogs } from './utils/suppressConsoleLog'

it('crashes if rendered without context', () => {
  suppressConsoleLogs(() => {
    expect(() => render(<DropdownItem>Item</DropdownItem>)).toThrow()
  })
})

it('renders without crashing', () => {
  render(
    <Dropdown>
      <DropdownItem>Item</DropdownItem>
    </Dropdown>
  )

  expect(screen.getByRole('menuitem')).toBeInTheDocument()
})

it('render with different tag', () => {
  render(
    <Dropdown>
      <DropdownItem as="a">Item</DropdownItem>
    </Dropdown>
  )

  expect(screen.getByRole('menuitem').tagName).toEqual('A')
})

it('render with custom component', () => {
  const Link = ({
    href,
    children,
    className = '',
    ...other
  }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => (
    <a href={href} className={`anchor ${className}`} {...other}>
      {children}
    </a>
  )

  render(
    <Dropdown>
      <DropdownItem as={Link} href="/">
        Item
      </DropdownItem>
    </Dropdown>
  )

  const element = screen.getByRole('menuitem')

  expect(element).toHaveClass('anchor')
  expect(element).toHaveAttribute('href', '/')
})

it('can be disabled', () => {
  const onClick = jest.fn()

  render(
    <Dropdown>
      <DropdownItem disabled onClick={onClick}>
        Item
      </DropdownItem>
    </Dropdown>
  )

  const element = screen.getByRole('menuitem')

  expect(element).toHaveAttribute('aria-disabled', 'true')
  expect(element).toBeDisabled()
  expect(onClick).not.toHaveBeenCalled()
})

it('should close dropdown on click', () => {
  render(
    <Dropdown>
      <DropdownToggle>Click Me</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Item 1</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )

  userEvent.click(screen.getByRole('button'))

  expect(screen.getByRole('menu')).toBeInTheDocument()

  userEvent.click(screen.getByRole('menuitem'))

  expect(screen.queryByRole('menu')).not.toBeInTheDocument()
})

it('accepts a callback prop for click event', () => {
  const onClick = jest.fn()

  render(
    <Dropdown>
      <DropdownItem onClick={onClick}>Item 1</DropdownItem>
    </Dropdown>
  )

  userEvent.click(screen.getByRole('menuitem'))

  expect(onClick).toHaveBeenCalledTimes(1)
})
