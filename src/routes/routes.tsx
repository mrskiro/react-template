import * as React from "react"
import * as ReactRouter from "react-router-dom"

const Root = React.lazy(() => import("./root"))

export const Routes = () => (
  <ReactRouter.BrowserRouter>
    <ReactRouter.Routes>
      <ReactRouter.Route index element={<Root />} />
      <ReactRouter.Route path="*" element={<p>404</p>} />
    </ReactRouter.Routes>
  </ReactRouter.BrowserRouter>
)
