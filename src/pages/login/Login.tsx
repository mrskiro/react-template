import * as React from "react"
import styled from "styled-components"
import * as Layouts from "@/layouts"
import { Input } from "@/components/Input/Input"
import { Button } from "@/components/Button"
import { useInput } from "./hooks"
import { Link } from "@/components/Link/Link"

export const Login = () => {
  const email = useInput()
  const password = useInput()

  const onClickLogin = React.useCallback(() => {
    console.log("login")
  }, [])

  return (
    <Layouts.Main>
      <Wrap>
        <Title>login</Title>
        <InputWrap>
          <label htmlFor={email.id}>email</label>
          <Input type="email" {...email} />
        </InputWrap>
        <InputWrap>
          <label htmlFor={password.id}>password</label>
          <Input type="password" {...password} />
        </InputWrap>
        <ActionArea>
          <Button onClick={onClickLogin}>login</Button>
        </ActionArea>
        <Link href="#">Sign up?</Link>
      </Wrap>
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
