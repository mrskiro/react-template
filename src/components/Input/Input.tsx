import * as React from "react"
import styled from "styled-components"

type Props = React.ComponentPropsWithRef<"input">

export const Input = (props: Props) => {
  return <SInput {...props} />
}

const SInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
`
