import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The type of the badge
   */
  type?: 'success' | 'danger' | 'warning' | 'neutral' | 'primary'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
  const { className, children, type = 'primary', ...other } = props
  const { badge } = styles

  const baseStyle = badge.base
  const typeStyle = {
    success: badge.success,
    danger: badge.danger,
    warning: badge.warning,
    neutral: badge.neutral,
    primary: badge.primary,
  }

  const cls = clsx(baseStyle, typeStyle[type], className)

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

export default Badge
