// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>We're sorry, but an error occurred.</p>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
          <hr/>
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default ErrorBoundary;
