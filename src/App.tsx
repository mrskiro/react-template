import * as React from "react"
import { Routes } from "@/routes"
import * as Errors from "@/lib/errors"

export const App = () => (
  <Errors.ErrorBoundary fallback={(err) => <p>Something went wrong :{JSON.stringify(err)}</p>}>
    <Routes />
  </Errors.ErrorBoundary>
)
