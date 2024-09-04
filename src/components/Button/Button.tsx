import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { StyledButton } from './Button.style'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}
