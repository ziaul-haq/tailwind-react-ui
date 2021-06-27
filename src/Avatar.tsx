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
  src?: string
  /**
   * If we want to show user status, default false
   */
  hasStatus?: boolean
  /**
   * status of the user if hasStatus is true
   */
  status?: 'active' |  'away' | 'busy' | 'offline'
  /**
   * name is a props that will add initials if src is invalid
   */
  name?: string

}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const {
    size = 'regular',
    hasStatus = false,
    status = 'active',
    name = 'Unknown',
    src,
    alt,
    className,
    ...other
  } = props
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
  const initialBaseImageClass = avatar.initialImageClass
  const initialFontSize = {
    large: avatar.initialFontSize.large,
    regular: avatar.initialFontSize.regular,
    small: avatar.initialFontSize.small,
  }

  const cls = clsx(baseStyle, sizeStyles[size], className)

  const statusCls = clsx(statusBaseStyle, statusIntent[status], statusSize[size])

  const initialCls = clsx(initialBaseImageClass, initialFontSize[size])

  const getInitial = (name:string) => {
    let names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  return (
    <div className={cls} ref={ref} role="img" aria-label={`Avatar${name ? ` of ${name}`:''} ${hasStatus ? ` and has status ${status}` : ''}`} {...other}>
      {src && <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />}
      {!src && <div data-testid="initialNode" className={initialCls}>{getInitial(name)}</div>}
      {hasStatus && <div data-testid="statusNode" className={statusCls} />}
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
    </div>
  )
})

export default Avatar
