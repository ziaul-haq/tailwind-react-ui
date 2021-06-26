import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'


export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the avatar
   */
  size?: 'large' | 'regular' | 'small'
  /**
   * Alternative text for the avatar image
   */
  alt?: string
  /**
   * The source for the avatar image
   */
  src: string
  /**
   * If we want to show user status, default false
   */
  hasStatus?: boolean
  /**
   * status of the user if hasStatus is true
   */
  status?: 'active' |  'away' | 'busy' | 'offline'

}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { size = 'regular', hasStatus = false, status = 'active', src, alt, className, ...other } = props
  const { avatar } = styles

  const baseStyle = avatar.base
  const sizeStyles = {
    large: avatar.size.large,
    regular: avatar.size.regular,
    small: avatar.size.small,
  }
  const statusBaseStyle = avatar.statusBase
  const statusIntent = {
    active: avatar.statusIntent.active,
    away: avatar.statusIntent.away,
    busy: avatar.statusIntent.busy,
    offline: avatar.statusIntent.offline,
  }
  const statusSize = {
    large: avatar.statusSize.large,
    regular: avatar.statusSize.regular,
    small: avatar.statusSize.small,
  }

  const cls = clsx(baseStyle, sizeStyles[size], className)

  const statusCls = clsx(statusBaseStyle, statusIntent[status], statusSize[size])

  return (
    <div className={cls} ref={ref} {...other}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      {hasStatus && <div data-testid="statusNode" className={statusCls} />}
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"/>
    </div>
  )
})

export default Avatar
