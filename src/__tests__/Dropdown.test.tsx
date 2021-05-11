import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Dropdown from '../Dropdown'

it('renders without crashing', () => {
  render(<Dropdown>Dropdown</Dropdown>)
})

it('closes on outside click', () => {
  render(
    <Dropdown>
      <Dropdown.Toggle>Click Me</Dropdown.Toggle>
      <Dropdown.Menu>Menu</Dropdown.Menu>
    </Dropdown>
  )

  userEvent.click(screen.getByRole('button'))

  expect(screen.getByRole('menu')).toBeInTheDocument()

  userEvent.click(document.documentElement)

  expect(screen.queryByRole('menu')).not.toBeInTheDocument()
})

it('closes on Esc key press', () => {
  render(
    <Dropdown>
      <Dropdown.Toggle>Click Me</Dropdown.Toggle>
      <Dropdown.Menu>Menu</Dropdown.Menu>
    </Dropdown>
  )

  userEvent.click(screen.getByRole('button'))

  expect(screen.getByRole('menu')).toBeInTheDocument()

  userEvent.keyboard('{Esc}')

  expect(screen.queryByRole('menu')).not.toBeInTheDocument()
})
