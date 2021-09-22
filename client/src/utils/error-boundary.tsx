import React from 'react';

type Props = {};
type State = { error: any; errorInfo: any };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  public componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
    console.log({ error, errorInfo });
  }

  public render() {
    const { error, errorInfo } = this.state;

    if (!error) {
      const { children } = this.props;
      return children;
    }

    return (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </div>
    );
  }
}
