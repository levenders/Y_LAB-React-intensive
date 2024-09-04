import { ComponentPropsWithRef, forwardRef } from 'react'

import { StyledInput } from './Input.style'

interface InputProps extends ComponentPropsWithRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { ...props },
  ref
) {
  return <StyledInput ref={ref} {...props} />
})
