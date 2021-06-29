import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '../Button'
import { EditIcon, HeartIcon } from './static/Icons'

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
    <Button className="mr-4" layout="primary" {...args}>
      Primary
    </Button>
    <Button className="mr-4" layout="outline" {...args}>
      Outline
    </Button>
    <Button className="mr-4" layout="link" {...args}>
      Link
    </Button>
  </section>
)

const IconOnlyTemplate: Story<ButtonProps> = (args) => (
  <section>
    <Button className="mr-4" layout="primary" {...args} />
    <Button className="mr-4" layout="outline" {...args} />
    <Button className="mr-4" layout="link" {...args} />
  </section>
)

export const Default = Template.bind({})

export const IconOnly = IconOnlyTemplate.bind({})
IconOnly.args = {
  'aria-label': 'Like',
  icon: HeartIcon,
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  iconLeft: () => <HeartIcon className="mr-2 -ml-1 w-4 h-4" />,
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  iconRight: () => <EditIcon className="ml-2 -mr-1 w-4 h-4" />,
}
