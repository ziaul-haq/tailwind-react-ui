import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { CardProps } from '../Card'
import CardBody from '../CardBody'

import forestImage from './static/forest.jpeg'

export default {
  title: 'Card',
  component: Card,
  subcomponents: { CardBody },
  argTypes: {
    children: {
      control: null,
    }
  },
} as Meta

const CardTemplate: Story<CardProps> = (args) => <Card {...args} />

export const Simple = CardTemplate.bind({})
Simple.args = {
  children: (
    <CardBody>
      <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
      <p className="text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam
        quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
        dolorum.
      </p>
    </CardBody>
  )
}

export const Colored = CardTemplate.bind({})
Colored.args = {
  colored: true,
  className: 'bg-purple-600',
  children: (
    <CardBody>
      <p className="mb-4 font-semibold text-white">Revenue</p>
      <p className="text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam
        quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
        dolorum.
      </p>
    </CardBody>
  )
}

export const Stats = () => (
  <section className="m-4 flex align-center">
    <Card colored className="bg-pink-600 px-5 py-8 mr-4">
      <CardBody>
        <p className="mb-4 text-base text-white">Registered Distributors</p>
        <p className="font-medium text-4xl text-white">200</p>
      </CardBody>
    </Card>
    <Card className="px-5 py-8 mr-4">
      <CardBody>
        <p className="text-pink-600 mb-4 text-base text-white">Expired Distributors</p>
        <p className="text-pink-600 font-medium text-4xl text-white">60</p>
      </CardBody>
    </Card>
    <Card className="px-5 py-8">
      <CardBody>
        <p className="text-gray-600 mb-4 text-base">Onboarded Distributors</p>
        <p className="text-gray-700 font-medium text-4xl">300</p>
      </CardBody>
    </Card>
  </section>
)

export const WithImage = CardTemplate.bind({})
WithImage.args = {
  className: 'flex h-48',
  children: (
    <>
      <img className="object-cover w-1/3" src={forestImage} />
      <CardBody>
        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
        <p className="text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam
          quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
          dolorum.
        </p>
      </CardBody>
    </>
  )
}
