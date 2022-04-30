import * as React from "react"
import * as Errors from "@/lib/errors"
import { newFetchProvider } from "@/lib/react-query"
import { Spinner } from "@/components/spinner"
import { Routes } from "@/routes"
import { Main } from "./layouts"

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
