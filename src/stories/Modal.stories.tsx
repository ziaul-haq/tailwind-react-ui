import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import actionImg from './static/action_completed.svg'
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
        <ModalBody className="flex flex-col items-center">
          <img src={actionImg} className="h-44 mb-8" />
          <h1 className="text-2xl text-center">OTP Validation Successful</h1>
          <p className="text-xl mt-3 mb-6 text-center">Your Bank Account has been linked to your saved Bank list</p>
          <Button onClick={closeModal}>Go to Saved Bank</Button>
        </ModalBody>
      </Modal>
    </>
  )
}
