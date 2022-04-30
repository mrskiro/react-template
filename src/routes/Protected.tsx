import * as React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/context/auth"

export const Protected = () => {
  const { me } = useAuth()
  if (!me) return <Navigate to="/login" replace />
  return <Outlet />
}
