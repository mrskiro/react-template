import { useQuery, useQueryClient } from "react-query"
import { apiInstance } from "@/lib/axios"
import { Me } from "../types"
import { key } from "./key"

export const useGetMe = () => {
  const queryClient = useQueryClient()
  const { data: me } = useQuery(key.me, async () => {
    if (queryClient.getQueryData(key.me)) {
      return queryClient.getQueryData<Me>(key.me)
    }
    const res = await apiInstance.get<Me>("/me")
    return res.data
  })

  return {
    me,
  }
}
