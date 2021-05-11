import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DropdownMenu from '../DropdownMenu'
import Dropdown from '../Dropdown'
import DropdownToggle from '../DropdownToggle'
import { suppressConsoleLogs } from './utils/suppressConsoleLog'

it('crashes if rendered without context', () => {
  suppressConsoleLogs(() => {
    expect(() => render(<DropdownMenu>Menu</DropdownMenu>)).toThrow()
  })
})

it('renders without crashing', () => {
  render(
    <Dropdown>
      <DropdownMenu>Menu</DropdownMenu>
    </Dropdown>
  )

  expect(screen.queryByRole('menu')).not.toBeInTheDocument()
})

it('becomes visible/hidden when dropdown is toggled', async () => {
  render(
    <Dropdown>
      <DropdownToggle>Click Me</DropdownToggle>
      <DropdownMenu>Menu</DropdownMenu>
    </Dropdown>
  )

  userEvent.click(screen.getByRole('button'))

  expect(screen.getByRole('menu')).toBeInTheDocument()

  userEvent.click(screen.getByRole('button'))

  expect(screen.queryByRole('menu')).not.toBeInTheDocument()
})

it('can align items left/right', () => {
  const { rerender } = render(
    <Dropdown>
      <DropdownToggle>Click Me</DropdownToggle>
      <DropdownMenu>Menu</DropdownMenu>
    </Dropdown>
  )

  userEvent.click(screen.getByRole('button'))

  expect(screen.getByRole('menu')).toHaveClass('left-0')

  rerender(
    <Dropdown>
      <DropdownToggle>Click Me</DropdownToggle>
      <DropdownMenu align="right">Menu</DropdownMenu>
    </Dropdown>
  )

  expect(screen.getByRole('menu')).toHaveClass('right-0')
})

it('allows custom styling', () => {
  render(
    <Dropdown>
      <DropdownToggle>Click Me</DropdownToggle>
      <DropdownMenu className="bg-purple-500">Menu</DropdownMenu>
    </Dropdown>
  )

  userEvent.click(screen.getByRole('button'))

  expect(screen.getByRole('menu')).toHaveClass('bg-purple-500')
})
