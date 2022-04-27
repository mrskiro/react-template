import * as React from "react"

type Props = {
  onError?: (err: unknown) => void
  fallback: (err: unknown) => React.ReactNode
  children: React.ReactNode
}

type State = {
  cause: unknown | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      cause: null,
    }
  }

  static getDerivedStateFromError(cause: unknown) {
    return { cause }
  }

  componentDidCatch(error: unknown, _info: React.ErrorInfo) {
    if (!this.props.onError) return
    this.props.onError(error)
  }

  render() {
    const { cause } = this.state
    if (cause) {
      return this.props.fallback(cause)
    }
    return this.props.children
  }
}
