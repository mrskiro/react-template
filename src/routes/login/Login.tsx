import * as React from "react"
import * as Pages from "@/pages"
import { useAuth } from "@/context/auth"
import { Navigate } from "react-router-dom"

export const Login = () => {
  const { me } = useAuth()
  if (me) return <Navigate to="/" replace />
  return <Pages.Login />
}
