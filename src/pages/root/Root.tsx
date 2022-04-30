import * as React from "react"
import { Main } from "@/layouts"
import { useAuth } from "@/context/auth"

type Props = {}

export const Root = (_props: Props) => {
  const { me } = useAuth()
  if (!me) {
    throw new Error("auth")
  }

  return (
    <Main>
      <p>{me.name}</p>
    </Main>
  )
}
