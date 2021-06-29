import React, { SyntheticEvent } from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'
import { DropdownMenuProps } from '../DropdownMenu'
import { Avatar,Badge,Button,Dropdown } from '../index'

export default {
  title: 'Dropdown',
  component: Dropdown,
  subcomponents: {
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    DropdownToggle: Dropdown.Toggle,
  },
  argTypes: {
    align: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
  },
} as Meta

const Template: Story<DropdownMenuProps> = ({ align }) => {
  const handleClick = (event: SyntheticEvent) =>
    alert(`${(event.target as HTMLElement).textContent} clicked`)

  return (
    <Dropdown>
      <Dropdown.Toggle as={Button}>Open Dropdown</Dropdown.Toggle>
      <Dropdown.Menu align={align}>
        <Dropdown.Item as="a" href="/?path=/story/dropdown--default">
          Anchor as an item
        </Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Button as an item</Dropdown.Item>
        <Dropdown.Item onClick={handleClick} className="justify-between">
          <span>Custom design</span>
          <Badge type="danger">13</Badge>
        </Dropdown.Item>
        <Dropdown.Item disabled onClick={handleClick}>
          Disabled item
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export const Default = Template.bind({})
Default.args = {
  align: 'left',
}

const CustomTemplate: Story<DropdownMenuProps> = ({ align }) => {
  const handleClick = (event: SyntheticEvent) =>
    alert(`${(event.target as HTMLElement).textContent} clicked`)

  return (
    <Dropdown>
      <Dropdown.Toggle as="div" className="flex items-center">
        <span className='mr-2'>John Doe</span>
        <Avatar name={'John Doe'} alt={'JohnDoe'} initialContainerClassName={'bg-primary text-primary-50'} hasStatus status={'active'}/>
      </Dropdown.Toggle>
      <Dropdown.Menu align={align}>
        <Dropdown.Item onClick={handleClick}>Settings</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Reset Password</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export const CustomToggle = CustomTemplate.bind({})
CustomToggle.args = {
  align: 'right',
}
