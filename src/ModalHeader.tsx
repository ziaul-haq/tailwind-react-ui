import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ModalHeader = React.forwardRef<HTMLParagraphElement, Props>(function ModalHeader(props, ref) {
  const { children, className, ...other } = props
  const { modalHeader } = styles

  const baseStyle = modalHeader.base

  const cls = clsx(baseStyle, className)

  return (
    <p className={cls} ref={ref} {...other}>
      {children}
    </p>
  )
})

export default ModalHeader
