import { ApiClient } from '@/api/Api'
import { Form, Tag } from '@/components'

import { StyledAuthForm, StyledAuthPage, StyledLogo } from './AuthPage.style'

export const AuthPage = () => {
  const handleClick = async (userData: { email: string; password: string }) => {
    try {
      const responce = await ApiClient({
        url: '/api/auth/login',
        method: 'POST',
        body: userData,
      })

      alert(responce.message)
      console.log(responce, userData)
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error)
    }
  }

  return (
    <StyledAuthPage>
      <StyledLogo
        src="/Y_LAB-React-intensive/lab.svg"
        width="350"
        height="350"
        alt="logo"
      />
      <StyledAuthForm>
        <Tag>Вход</Tag>
        <Form title="Вход" handleClick={handleClick} />
        <p>Нет аккаунта?</p>
        <a href="/">Регистрация</a>
      </StyledAuthForm>
    </StyledAuthPage>
  )
}
