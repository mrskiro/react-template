import { Spinner } from "@/components/spinner"
import { ErrorBoundary } from "@/lib/errors"
import * as React from "react"
import styled from "styled-components"
import { useGetObjectives } from "../../hooks"

export const ObjectiveList = () => {
  return (
    <ErrorBoundary fallback={() => <p>objective something error</p>}>
      <React.Suspense fallback={<Spinner />}>
        <_ObjectiveList />
      </React.Suspense>
    </ErrorBoundary>
  )
}

const _ObjectiveList = () => {
  const { objectives } = useGetObjectives()
  return (
    <Ul>
      {objectives.map((v) => (
        <Li key={v.id}>
          <Flex>
            <p>{v.title}</p>
            <p>{v.achievementRate}</p>
            <p>{new Date(v.createdAt).toDateString()}</p>
          </Flex>
        </Li>
      ))}
    </Ul>
  )
}

const Ul = styled.ul``

const Li = styled.li`
  list-style: initial;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
