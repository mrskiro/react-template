import * as React from "react"
import * as ReactRouter from "react-router-dom"
import { Protected } from "./Protected"

const Root = React.lazy(() => import("./root"))
const Login = React.lazy(() => import("./login"))

export const Routes = () => (
  <ReactRouter.BrowserRouter>
    <ReactRouter.Routes>
      <ReactRouter.Route path="/" element={<Protected />}>
        <ReactRouter.Route index element={<Root />} />
      </ReactRouter.Route>
      <ReactRouter.Route path="/login" element={<Login />} />
      <ReactRouter.Route path="*" element={<p>404</p>} />
    </ReactRouter.Routes>
  </ReactRouter.BrowserRouter>
)
