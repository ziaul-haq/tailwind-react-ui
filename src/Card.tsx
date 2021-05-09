import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Removes default styles (if true) so you can override with your own background styles
   */
  colored?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
  const { className, children, colored = false, ...other } = props
  const { card } = styles

  const baseStyle = card.base
  const uncoloredStyle = card.default

  const cls = clsx(baseStyle, !colored && uncoloredStyle, className)

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  )
})

export default Card
