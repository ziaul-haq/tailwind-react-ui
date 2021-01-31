import React, { useContext } from 'react'
import { ButtonProps } from './Button'
import Button from './Button'

type Ref = typeof Button
const DropdownItem = React.forwardRef<Ref, ButtonProps>(function DropdownItem(props, ref) {
  // Note: className is passed to the inner Button
  const { children, ...other } = props

  return (
    <li>
      <Button layout="__dropdownItem" ref={ref} {...other}>
        {children}
      </Button>
    </li>
  )
})

export default DropdownItem
