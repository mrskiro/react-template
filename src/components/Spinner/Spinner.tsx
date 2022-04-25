/* eslint-disable react/prop-types */
import * as React from "react"
import * as Styles from "./styles.css"

type Props = {} & Styles.Variants

export const Spinner = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
  <div ref={ref} className={Styles.recipe({ size: props.size })} />
))

Spinner.displayName = "Spinner"
