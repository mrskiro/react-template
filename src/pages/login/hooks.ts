import * as React from "react"

export const useInput = () => {
  const id = React.useId()
  const [value, setValue] = React.useState("")

  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return {
    id,
    value,
    onChange,
  }
}
