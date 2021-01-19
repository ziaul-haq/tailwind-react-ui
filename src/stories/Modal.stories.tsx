import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Button from '../Button'
import Modal from '../Modal'
import ModalBody from '../ModalBody'
import ModalFooter from '../ModalFooter'
import ModalHeader from '../ModalHeader'

export default {
  title: 'Modal',
  component: Modal,
  subcomponents: {
    ModalBody,
    ModalFooter,
    ModalHeader,
  },
} as Meta

export const Basic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  return (
    <>
      <div>
        <Button onClick={openModal}>Open modal</Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
          voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button className="w-full sm:w-auto" onClick={closeModal}>Accept</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
