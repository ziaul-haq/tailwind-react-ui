import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, Props>(function TableHeader(
  props,
  ref
) {
  const { className, children, ...other } = props

  const { tableHeader } = styles

  const baseStyle = tableHeader.base

  const cls = clsx(baseStyle, className)

  return (
    <thead className={cls} ref={ref} {...other}>
      {children}
    </thead>
  )
})

export default TableHeader
