import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AuthPage } from '@/pages'

import GlobalStyle from './styles/globalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <AuthPage />
  </StrictMode>
)
