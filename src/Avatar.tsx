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
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { size = 'regular', src, alt, className, ...other } = props
  const { avatar } = styles

  const baseStyle = avatar.base
  const sizeStyles = {
    large: avatar.size.large,
    regular: avatar.size.regular,
    small: avatar.size.small,
  }

  const cls = clsx(baseStyle, sizeStyles[size], className)

  return (
    <div className={cls} ref={ref} {...other}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
    </div>
  )
})

export default Avatar
