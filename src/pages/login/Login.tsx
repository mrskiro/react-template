import * as React from "react"
import styled from "styled-components"
import { Button } from "@/components/button"
import { Input } from "@/components/input/Input"
import { Link } from "@/components/link/Link"
import { useLogin } from "@/features/auth"
import * as Layouts from "@/layouts"
import { useInput } from "./hooks"

type Props = {
  toRoot: () => void
}

export const Login = ({ toRoot }: Props) => {
  const email = useInput()
  const password = useInput()

  const { login } = useLogin()

  const onClickLogin = React.useCallback(async () => {
    try {
      await login({
        email: email.value,
        password: password.value,
      })
      toRoot()
    } catch (error) {
      console.log("err")
    }
  }, [login, email.value, password.value, toRoot])

  return (
    <Layouts.Main>
      <form>
        <Wrap>
          <Title>login</Title>
          <InputWrap>
            <label htmlFor={email.id}>email</label>
            <Input type="email" autoComplete="email" {...email} />
          </InputWrap>
          <InputWrap>
            <label htmlFor={password.id}>password</label>
            <Input type="password" autoComplete="current-password" {...password} />
          </InputWrap>
          <ActionArea>
            <Button onClick={onClickLogin}>login</Button>
          </ActionArea>
          <Link href="#">Sign up?</Link>
        </Wrap>
      </form>
    </Layouts.Main>
  )
}

const Wrap = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
`

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const ActionArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
