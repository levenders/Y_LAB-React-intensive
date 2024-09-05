import { ReactNode } from 'react'

import { StyledValidation } from './Validation.style'

interface ValidationProps {
  children: ReactNode
}

export const Validation = ({ children, ...props }: ValidationProps) => {
  return <StyledValidation {...props}>{children}</StyledValidation>
}
