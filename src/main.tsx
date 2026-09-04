import React, { Component, type ErrorInfo, type ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class AppErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error rendering app:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ padding: '3rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <h1>Subscribe Flowers</h1>
          <p>We could not load the storefront. Please refresh the page and try again.</p>
          {this.state.errorMessage && <small>{this.state.errorMessage}</small>}
        </main>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found</div>'
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <AppErrorBoundary>
          <App />
        </AppErrorBoundary>
      </React.StrictMode>,
    )
  } catch (error) {
    console.error('Error rendering app:', error)
    document.body.innerHTML = '<div style="padding: 20px; color: red;">Error loading app. Check console for details.</div>'
  }
}
