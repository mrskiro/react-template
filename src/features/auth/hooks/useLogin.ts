import * as React from "react"
import { useMutation, useQueryClient } from "react-query"
import { apiInstance } from "@/lib/axios"
import { LoginInfo, Me } from "../types"
import { key } from "./key"

export const useLogin = () => {
  const queryClient = useQueryClient()

  const setMe = React.useCallback(
    (data: Me) => {
      queryClient.setQueryData(key.me, data)
    },
    [queryClient]
  )

  const { mutateAsync } = useMutation(
    async (_data: LoginInfo) => {
      const res = await apiInstance.post<Me>("/login")
      return res.data
    },
    { onSuccess: setMe }
  )

  const login = React.useCallback(
    async (info: LoginInfo) => {
      await mutateAsync(info)
    },
    [mutateAsync]
  )

  return {
    login,
  }
}
