import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Backdrop = React.forwardRef<HTMLDivElement, Props>(function Backdrop(props, ref) {
  const { className, ...other } = props
  const { backdrop } = styles

  const baseStyle = backdrop.base

  const cls = clsx(baseStyle, className)
  return <div className={cls} ref={ref} {...other}></div>
})

export default Backdrop
