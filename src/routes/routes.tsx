import * as React from "react"
import * as ReactRouter from "react-router-dom"

export const Routes = () => (
  <ReactRouter.BrowserRouter>
    <ReactRouter.Routes>
      <ReactRouter.Route index element={<p>404</p>} />
    </ReactRouter.Routes>
  </ReactRouter.BrowserRouter>
)
