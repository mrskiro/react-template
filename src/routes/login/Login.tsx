import * as React from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useGetMe } from "@/features/auth"
import * as Pages from "@/pages"

export const Login = () => {
  const navigate = useNavigate()
  const { me } = useGetMe()
  if (me) return <Navigate to="/" replace />
  return (
    <Pages.Login
      toRoot={() => {
        navigate("/", { replace: true })
      }}
    />
  )
}
