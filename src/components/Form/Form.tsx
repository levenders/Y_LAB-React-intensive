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

import { Button, Input } from '@/components'

import { StyledForm } from './Form.style'

interface FormProps extends ComponentPropsWithoutRef<'form'> {
  title: string
  handleClick: (userData: { email: string; password: string }) => void
}

export const Form = ({ title, handleClick }: FormProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
