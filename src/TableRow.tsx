import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, Props>(function TableRow(props, ref) {
  const { className, children, ...other } = props

  const { tableRow } = styles

  const baseStyle = tableRow.base

  const cls = clsx(baseStyle, className)

  return (
    <tr className={cls} ref={ref} {...other}>
      {children}
    </tr>
  )
})

export default TableRow
