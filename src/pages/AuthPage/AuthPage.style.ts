import { gray } from '@/styles/colors'
import styled from 'styled-components'

export const StyledAuthForm = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
export const StyledLogo = styled.img`
  display: block;
  padding-right: 70px;
  border-right: 2px solid ${gray};

  ${`@media (max-width: 850px)`} {
    display: none;
  }
`
export const StyledAuthPage = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`
