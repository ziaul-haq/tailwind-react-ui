import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

enum typeEnum {
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Defines the color of the input
   */
  valid?: boolean
  /**
   * Defines if the input is disabled
   */
  disabled?: boolean
  /**
   * Defines the type of the input
   */
  type?: keyof typeof typeEnum
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const { valid, disabled, className, type = 'text', ...other } = props
  const { input } = styles

  const baseStyle = input.base
  const activeStyle = input.active
  const disabledStyle = input.disabled
  const validStyle = input.valid
  const invalidStyle = input.invalid
  const radioStyle = input.radio
  const checkStyle = input.checkbox

  function hasValidation(valid: boolean | undefined) {
    return valid !== undefined
  }

  function validationStyle(valid: boolean | undefined): string {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  function typeStyle(type: string): string {
    switch (type) {
      case 'radio':
        return radioStyle
      case 'checkbox':
        return checkStyle
      default:
        return baseStyle
    }
  }

  const cls = clsx(
    typeStyle(type),
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  )

  return <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
})

export default Input
