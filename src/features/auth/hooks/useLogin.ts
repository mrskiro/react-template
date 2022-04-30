import * as React from "react"
import { useMutation, useQueryClient } from "react-query"
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
      return new Promise<Me>((res) => {
        setTimeout(() => {
          res({ name: "loggin!" })
        }, 1000)
      })
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
