import React, { useContext } from 'react'
import classNames from 'classnames'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ModalFooter = React.forwardRef<HTMLElement, Props>(function ModalFooter(props, ref) {
  const { children, className, ...other } = props
  const { modalFooter } = styles

  const baseStyle = modalFooter.base

  const cls = classNames(baseStyle, className)

  return (
    <footer className={cls} ref={ref} {...other}>
      {children}
    </footer>
  )
})

export default ModalFooter
