import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Input, { InputProps } from '../Input'
import Label from '../Label'
import HelperText from '../HelperText'
import { HeartIcon } from './Button.stories'

export default {
  title: 'Input',
  component: Input,
  subcomponents: { Label, HelperText },
  argTypes: {
    onChange: { action: 'onChange' },
    type: {
      control: null,
    }
  }
} as Meta

const TextTemplate: Story<InputProps> = (args) => (
  <section className="w-full">
    <Label>
      <span>Name</span>
      <Input className="mt-1" {...args} />
    </Label>
    <Label className="mt-2">
      <span>Password</span>
      <Input className="mt-1" type="password" {...args} />
      <HelperText>Password should have more than 6 characters</HelperText>
    </Label>
    <Label className="mt-2">
      <span>Password</span>
      <Input className="mt-1" type="password" {...args} valid />
      <HelperText valid>Your password is strong</HelperText>
    </Label>
    <Label className="mt-2">
      <span>Password</span>
      <Input className="mt-1" type="password" {...args} valid={false} />
      <HelperText valid={false}>Weak Password</HelperText>
    </Label>
    <Label className="mt-2">
      <span>Email</span>
      <Input className="mt-1" value="abc@yahoo.com" {...args} disabled />
    </Label>
    <Label className="mt-2 relative">
      <span>Email</span>
      <Input className="mt-1 pl-10" value="abc@yahoo.com" {...args} />
      <HeartIcon className='w-6 h-6 absolute bottom-2 left-2 text-red-600' />
    </Label>
  </section>
)

export const TextInput = TextTemplate.bind({})

const RadioTemplate: Story<InputProps> = (args) => (
  <>
    <Label className="mb-4">Gender</Label>
    <Label radio className="mr-2">
      <Input type="radio" name="gender" value="M" {...args} />
      <span className="ml-2">Male</span>
    </Label>
    <Label radio className="mr-2">
      <Input type="radio" name="gender" value="F" {...args} />
      <span className="ml-2">Female</span>
    </Label>
    <Label radio>
      <Input type="radio" name="gender" value="T" {...args} />
      <span className="ml-2">Trans</span>
    </Label>
  </>
)

export const RadioInput = RadioTemplate.bind({})

const CheckboxTemplate: Story<InputProps> = (args) => (
  <>
    <Label className="mb-4">Hobbies</Label>
    <Label check className="mr-2">
      <Input type="checkbox" name="hobbies" value="sports" {...args} />
      <span className="ml-2">Sports</span>
    </Label>
    <Label check className="mr-2">
      <Input type="checkbox" name="hobbies" value="gaming" {...args} />
      <span className="ml-2">PC Gaming</span>
    </Label>
    <Label check className="mr-2">
      <Input type="checkbox" name="hobbies" value="reading" {...args} />
      <span className="ml-2">Reading</span>
    </Label>
    <Label check>
      <Input type="checkbox" name="hobbies" value="music" {...args} />
      <span className="ml-2">Music</span>
    </Label>
  </>
)

export const CheckboxInput = CheckboxTemplate.bind({})
