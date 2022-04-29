import * as React from "react"
import styled from "styled-components"

type Props = React.ComponentPropsWithoutRef<"button">

export const Button = (props: React.PropsWithChildren<Props>) => {
  return <SButton {...props}>{props.children}</SButton>
}

const SButton = styled.button`
  width: 100%;
  background-color: #d6bcfa;
  border-radius: 6px;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  text-align: center;

  transition-property: background-color;
  transition-duration: 0.4s;

  &:hover {
    background-color: #b794f4;
  }
`
