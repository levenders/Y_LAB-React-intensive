import styled from 'styled-components'

import { black, gray, purple } from '@/styles/colors'

export const StyledInput = styled.input`
  font-size: 17px;
  color: ${black};

  border: 1px solid ${gray};
  border-radius: 10px;

  padding: 10px;

  &:focus {
    outline: 2px solid ${purple};
  }
`
