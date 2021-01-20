import React, { useState } from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Label from '../Label'
import Select, { SelectProps } from '../Select'

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    children: {
      control: false,
    },
    onChange: { action: 'onChange' },
  },
} as Meta

const Template: Story<SelectProps> = (args) => (
  <Label>
    <span>Requested Limit</span>
    <Select className="mt-1" {...args} />
  </Label>
)

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  multiple: false,
  valid: undefined,
  children: (
    <>
      <option value="1000">$1,000</option>
      <option value="2000">$2,000</option>
      <option value="3000">$3,000</option>
      <option value="4000">$4,000</option>
      <option value="5000">$5,000</option>
    </>
  )
}
