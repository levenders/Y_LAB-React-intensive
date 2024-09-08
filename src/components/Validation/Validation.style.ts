import styled, { keyframes } from 'styled-components'

import { red, white } from '@/styles/colors'

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    
  }
`

export const StyledValidation = styled.div`
  background-color: ${red};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 300px;

  position: absolute;
  top: -55px;

  color: ${white};
  font-size: 17px;
  font-weight: 200;
  text-align: center;

  animation: ${fadeInOut} 4s linear forwards;
`
