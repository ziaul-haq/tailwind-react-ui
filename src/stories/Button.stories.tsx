import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '../Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: 'inline-radio',
    },
    type: {
      control: {
        type: 'inline-radio',
        options: ['button', 'submit', 'reset'],
      },
    },
    onClick: { action: 'onClick' },
    icon: {
      control: null,
    },
    iconLeft: {
      control: null,
    },
    iconRight: {
      control: null,
    },
    layout: {
      control: null,
    },
    tag: {
      control: null,
    },
  },
  args: {
    size: 'regular',
    disabled: false,
    block: false,
    type: 'button',
  },
  includeStories: ['Default', 'IconOnly', 'LeftIcon', 'RightIcon'],
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <section>
    <Button className="mr-4" layout="primary" {...args}>Primary</Button>
    <Button className="mr-4" layout="outline" {...args}>Outline</Button>
    <Button className="mr-4" layout="link" {...args}>Link</Button>
  </section>
)

const IconOnlyTemplate: Story<ButtonProps> = (args) => (
  <section>
    <Button className="mr-4" layout="primary" {...args} />
    <Button className="mr-4" layout="outline" {...args} />
    <Button className="mr-4" layout="link" {...args} />
  </section>
)

export const EditIcon = ({ className = '' }: { className?: string}) => (
  <svg className={className} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
  </svg>
)

export const HeartIcon = ({ className }: { className?: string}) => (
  <svg className={className} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" fillRule="evenodd"></path>
  </svg>
)

export const Default = Template.bind({})

export const IconOnly = IconOnlyTemplate.bind({})
IconOnly.args = {
  'aria-label': 'Like',
  icon: HeartIcon,
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  iconLeft: () => <HeartIcon className="mr-2 -ml-1" />,
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  iconRight: () => <EditIcon className="ml-2 -mr-1" />,
}
