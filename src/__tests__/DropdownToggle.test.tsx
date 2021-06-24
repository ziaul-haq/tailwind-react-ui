import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '../Button'
import DropdownToggle from '../DropdownToggle'
import Dropdown from '../Dropdown'
import { suppressConsoleLogs } from './utils/suppressConsoleLog'

it('crashes if rendered without context', () => {
  suppressConsoleLogs(() => {
    expect(() => render(<DropdownToggle>Click Me</DropdownToggle>)).toThrow()
  })
})

it('renders without crashing', () => {
  render(
    <Dropdown>
      <DropdownToggle>Click Me</DropdownToggle>
    </Dropdown>
  )

  expect(screen.getByRole('button')).toBeInTheDocument()
})

it('renders with different tag', () => {
  render(
    <Dropdown>
      <DropdownToggle as="div" className="btn">
        Click Me
      </DropdownToggle>
    </Dropdown>
  )

  expect(screen.getByRole('button').tagName).toEqual('DIV')
})

it('renders with custom component', () => {
  render(
    <Dropdown>
      <DropdownToggle as={Button} block>
        Click Me
      </DropdownToggle>
    </Dropdown>
  )

  expect(screen.getByRole('button')).toHaveClass('w-full')
})

it('can toggle dropdown state', () => {
  render(
    <Dropdown>
      <DropdownToggle>Click Me</DropdownToggle>
    </Dropdown>
  )

  const element = screen.getByRole('button')

  expect(element).toHaveAttribute('aria-haspopup', 'true')
  expect(element).not.toHaveAttribute('aria-expanded')

  userEvent.click(element)

  expect(element).toHaveAttribute('aria-expanded', 'true')

  userEvent.click(element)

  expect(element).not.toHaveAttribute('aria-expanded')
})
