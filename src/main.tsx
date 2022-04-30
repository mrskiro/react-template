import React from "react"
import ReactDOM from "react-dom/client"
import { ResetCSS } from "@/lib/globalStyles"
import { worker } from "@/tests/mocks/api/browser"
import { App } from "./App"

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
