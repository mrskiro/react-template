import * as React from "react"
import { QueryClient, QueryClientProvider, DefaultOptions } from "react-query"

export const newFetchProvider = (options?: DefaultOptions) => {
  const queryClient = new QueryClient({
    defaultOptions: options,
  })

  const FetchProvider = (props: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
  )
  return FetchProvider
}
