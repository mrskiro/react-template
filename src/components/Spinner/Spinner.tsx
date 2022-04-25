import * as React from "react"
import * as S from "./styles"

type Props = {}

export const Spinner = React.forwardRef<HTMLDivElement, Props>((_props, ref) => <S.Div ref={ref} />)

Spinner.displayName = "Spinner"
