import * as React from "react"
import { Main } from "@/layouts"
import { useGetMe } from "@/features/auth"

type Props = {}

export const Root = (_props: Props) => {
  const { me } = useGetMe()
  if (!me) {
    throw new Error("401")
  }

  return (
    <Main>
      <p>{me.name}</p>
    </Main>
  )
}
