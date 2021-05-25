import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Defines the color of the textarea
   */
  valid?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(function Textarea(props, ref) {
  const { valid, disabled, className, children, ...other } = props

  const { textarea } = styles

  const baseStyle = textarea.base
  const activeStyle = textarea.active
  const disabledStyle = textarea.disabled
  const validStyle = textarea.valid
  const invalidStyle = textarea.invalid

  function hasValidation(valid: boolean | undefined) {
    return valid !== undefined
  }

  function validationStyle(valid: boolean | undefined): string {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  const cls = clsx(
    baseStyle,
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  )

  return (
    <textarea className={cls} ref={ref} disabled={disabled} {...other}>
      {children}
    </textarea>
  )
})

export default Textarea
