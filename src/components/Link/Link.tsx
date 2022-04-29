import * as React from "react"
import styled from "styled-components"

type Props = React.ComponentPropsWithoutRef<"a">

export const Link = (props: React.PropsWithChildren<Props>) => <A {...props}>{props.children}</A>

const A = styled.a`
  color: #4299e1;

  &:hover {
    text-decoration: underline;
  }
`
