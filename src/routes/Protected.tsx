import * as React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useGetMe } from "@/features/auth"

export const Protected = () => {
  const { me } = useGetMe()
  if (!me) return <Navigate to="/login" replace />
  return <Outlet />
}
