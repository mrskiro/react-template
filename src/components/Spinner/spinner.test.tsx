import * as React from "react"
import * as T from "@testing-library/react"
import { Spinner } from "./Spinner"

describe("<Spinner />", () => {
  it("should defined", () => {
    const { container } = T.render(<Spinner />)
    expect(container).toBeInTheDocument()
  })
})
