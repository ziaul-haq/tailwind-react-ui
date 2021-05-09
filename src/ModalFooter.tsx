import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ModalFooter = React.forwardRef<HTMLElement, Props>(function ModalFooter(props, ref) {
  const { children, className, ...other } = props
  const { modalFooter } = styles

  const baseStyle = modalFooter.base

  const cls = clsx(baseStyle, className)

  return (
    <footer className={cls} ref={ref} {...other}>
      {children}
    </footer>
  )
})

export default ModalFooter
