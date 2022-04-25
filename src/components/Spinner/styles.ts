import styled, { keyframes } from "styled-components"

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const Div = styled.div`
  border: 2px solid #333;
  border-radius: 99999px;
  border-bottom-color: transparent;
  border-left-color: transparent;
  width: 32px;
  height: 32px;
  animation: ${rotate} 0.45s linear infinite;
`
