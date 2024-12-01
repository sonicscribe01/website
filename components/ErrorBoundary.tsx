import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
            <p className="mb-8">We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-[#FF4500] hover:bg-[#FF6347] text-white font-bold py-2 px-4 rounded"
            >
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

