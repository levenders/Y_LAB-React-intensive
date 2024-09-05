import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { flushSync } from 'react-dom'

import { Button, Input, Validation } from '@/components'

import { StyledForm } from './Form.style'

interface FormProps extends ComponentPropsWithoutRef<'form'> {
  title: string
  handleClick: (userData: { email: string; password: string }) => void
}

export const Form = ({ title, handleClick }: FormProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [error, setError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    flushSync(() => {
      // необходимо для принудительного синхронного обновления, иначе Fiber не дает сбросить состояние
      setError(null)
    })

    if (!email.trim() || !password.trim()) {
      setError('Необходимо заполнить все поля!')
      return
    }

    handleClick({ email, password })
    setEmail('')
    setPassword('')
  }

  const handleChange = useCallback(
    (setter: Dispatch<SetStateAction<string>>) =>
      (e: ChangeEvent<HTMLInputElement>) =>
        setter(e.target.value),
    []
  )

  useEffect(() => {
    focusInput()
  }, [])

  return (
    <StyledForm onSubmit={handleSubmit}>
      {error && <Validation>{error}</Validation>}
      <Input
        type="email"
        value={email}
        placeholder="email"
        ref={inputRef}
        autoComplete="email"
        onChange={handleChange(setEmail)}
      />
      <Input
        type="password"
        value={password}
        placeholder="password"
        autoComplete="current-password"
        onChange={handleChange(setPassword)}
      />
      <Button type="submit">{title}</Button>
    </StyledForm>
  )
}
