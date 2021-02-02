import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Badge, { BadgeProps } from '../Badge'

export default {
  title: 'Badge',
  component: Badge,
} as Meta

const Template: Story<BadgeProps> = () => (
  <section>
    <Badge type="neutral">Neutral</Badge>
    <Badge type="primary" className="mx-4">Primary</Badge>
    <Badge type="success">Success</Badge>
    <Badge type="warning" className="mx-4">Warning</Badge>
    <Badge type="danger">Danger</Badge>
  </section>
)

export const Default = Template.bind({})
Default.args = {}
