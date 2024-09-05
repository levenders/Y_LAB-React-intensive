import styled from 'styled-components'

import { purple, white } from '@/styles/colors'

export const StyledButton = styled.button`
  padding: 15px 50px;

  border-radius: 29px;
  border: none;

  color: ${white};
  font-size: 15px;
  text-transform: uppercase;

  box-shadow: 3px 3px 3px 2px rgba(78, 84, 89, 0.25);

  cursor: pointer;

  background: ${purple};
  transition: opacity 0.25s;

  @media (hover: hover) {
    &:hover {
      opacity: 0.85;
    }
  }

  @media (hover: none) {
    &:active {
      opacity: 0.85;
    }
  }
`
