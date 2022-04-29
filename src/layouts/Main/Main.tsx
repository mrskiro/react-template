import * as React from "react"
import styled from "styled-components"

type Props = {
  children: React.ReactNode
}

export const Main = (props: Props) => <Wrap>{props.children}</Wrap>

const Wrap = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf2f7;
`
