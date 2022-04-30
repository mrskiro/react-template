import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { ResetCSS } from "@/lib/globalStyles"
import { worker } from "@/tests/mocks/api/browser"

if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "bypass",
  })
}

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>
)
