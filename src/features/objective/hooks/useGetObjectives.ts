import { useQuery } from "react-query"
import { apiInstance } from "@/lib/axios"
import { Objective } from "../types"
import { key } from "./key"

export const useGetObjectives = () => {
  const { data: objectives = [] } = useQuery<Objective[]>(key.objectives, async () => {
    const res = await apiInstance.get("/objectives")
    return res.data
  })

  return {
    objectives,
  }
}
