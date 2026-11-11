import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode; label?: string };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn(`[showcase] design crashed${this.props.label ? ` (${this.props.label})` : ""}:`, error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="m-4 rounded-md border border-red-300 bg-red-50 p-4 font-mono text-sm text-red-800">
          <p className="mb-1 font-sans font-semibold">This design failed to render{this.props.label ? `: ${this.props.label}` : ""}</p>
          <p className="whitespace-pre-wrap break-words">{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
