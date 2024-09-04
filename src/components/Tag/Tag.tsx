import { ReactNode } from 'react'

import { StyledTag } from './Tag.style'

interface TagProps {
  children?: ReactNode
}

export const Tag = ({ children, ...props }: TagProps) => {
  return <StyledTag {...props}>{children}</StyledTag>
}
