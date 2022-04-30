import * as React from "react"
import { LoginInfo, Me } from "@/features/user"
import { useQuery, useMutation, useQueryClient } from "react-query"

const Context = React.createContext<{
  me: Me | undefined
  login: (info: LoginInfo) => Promise<void>
} | null>(null)

const key = "me"

type Props = {
  children?: React.ReactNode
}

export const AuthProvider = (props: Props) => {
  const queryClient = useQueryClient()
  const { data: me } = useQuery(key, async () => {
    return new Promise<Me | undefined>((res, rej) => {
      setTimeout(() => {
        if (queryClient.getQueryData(key)) {
          res(queryClient.getQueryData(key))
        } else {
          res(undefined)
        }
      }, 1000)
    })
  })

  const setMe = React.useCallback(
    (data: Me) => {
      queryClient.setQueryData(key, data)
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

  return <Context.Provider value={{ me, login }}>{props.children}</Context.Provider>
}

export const useAuth = () => {
  const ctx = React.useContext(Context)
  if (!ctx) throw new Error("forbidden auth provider")
  return ctx
}
