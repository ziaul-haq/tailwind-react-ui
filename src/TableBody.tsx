import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, Props>(function TableBody(props, ref) {
  const { className, children, ...other } = props

  const { tableBody } = styles

  const baseStyle = tableBody.base

  const cls = clsx(baseStyle, className)

  return (
    <tbody className={cls} ref={ref} {...other}>
      {children}
    </tbody>
  )
})

export default TableBody
