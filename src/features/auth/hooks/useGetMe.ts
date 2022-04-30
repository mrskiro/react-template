import { useQuery, useQueryClient } from "react-query"
import { Me } from "../types"
import { key } from "./key"

export const useGetMe = () => {
  const queryClient = useQueryClient()

  const { data: me } = useQuery(key.me, async () => {
    return new Promise<Me | undefined>((res, _rej) => {
      setTimeout(() => {
        if (queryClient.getQueryData(key.me)) {
          res(queryClient.getQueryData(key.me))
        } else {
          res(undefined)
        }
      }, 1000)
    })
  })

  return {
    me,
  }
}
