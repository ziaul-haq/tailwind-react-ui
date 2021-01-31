import React, { useState } from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Badge from '../Badge'
import Button from '../Button'
import Dropdown, { DropdownProps } from '../Dropdown'
import DropdownItem from '../DropdownItem'

export default {
  title: 'Dropdown',
  component: Dropdown,
  subcomponents: { DropdownItem },
  argTypes: {
    isOpen: {
      control: null,
    },
  },
} as Meta

const Template: Story<DropdownProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Button onClick={toggleDropdown} aria-label="Notifications" aria-haspopup="true">
        Open dropdown
      </Button>
      <Dropdown {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DropdownItem tag="a" href="#" className="justify-between">
          <span>Messages</span>
          <Badge type="danger">13</Badge>
        </DropdownItem>
        <DropdownItem onClick={() => setIsOpen(false)}>
          <span>Alerts</span>
        </DropdownItem>
        <DropdownItem onClick={() => setIsOpen(false)}>
          <span>Account</span>
        </DropdownItem>
        <DropdownItem onClick={() => setIsOpen(false)}>
          <span>Support</span>
        </DropdownItem>
        <DropdownItem onClick={() => setIsOpen(false)}>
          <span>Sign Out</span>
        </DropdownItem>
      </Dropdown>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  align: 'left',
}
