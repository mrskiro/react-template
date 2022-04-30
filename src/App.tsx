import * as React from "react"
import { Routes } from "@/routes"
import * as Errors from "@/lib/errors"
import { Main } from "./layouts"
import { Spinner } from "@/components/spinner"
import { newFetchProvider } from "@/lib/react-query"

const FetchProvider = newFetchProvider({
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    suspense: true,
    useErrorBoundary: false,
  },
})

export const App = () => (
  <React.Suspense fallback={<Loading />}>
    <Errors.ErrorBoundary
      onError={(err) => console.error(err)}
      fallback={(err) => <p>Something went wrong :{JSON.stringify(err)}</p>}
    >
      <FetchProvider>
        <Routes />
      </FetchProvider>
    </Errors.ErrorBoundary>
  </React.Suspense>
)

const Loading = () => (
  <Main>
    <Spinner />
  </Main>
)
