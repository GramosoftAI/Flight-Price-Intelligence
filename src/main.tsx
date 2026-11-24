import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RootErrorBoundary } from './components/ErrorBoundary';
import './index.css';

// Suppress third-party browser extension noise (e.g. TransOver / contentscript.js)
if (typeof window !== 'undefined') {
  window.addEventListener(
    'error',
    (event) => {
      const source = event.filename || '';
      const stack = event.error?.stack || '';
      if (
        source.includes('chrome-extension://') ||
        source.includes('contentscript.js') ||
        stack.includes('chrome-extension://') ||
        stack.includes('contentscript.js') ||
        event.message?.includes('contentscript.js')
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return true;
      }
    },
    true
  );

  window.addEventListener(
    'unhandledrejection',
    (event) => {
      const reason = event.reason;
      const str = typeof reason === 'string' ? reason : reason?.stack || reason?.message || '';
      if (str.includes('chrome-extension://') || str.includes('contentscript.js')) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true
  );

  if (typeof console !== 'undefined' && console.error) {
    const originalConsoleError = console.error;
    console.error = function (...args) {
      const msg = args.map((a) => (typeof a === 'string' ? a : a?.stack || a?.message || '')).join(' ');
      if (
        msg.includes('chrome-extension://') ||
        msg.includes('contentscript.js') ||
        msg.includes('aggiiclaiamajehmlfpkjmlbadmkledi') ||
        (msg.includes('querySelector') && (msg.includes('null') || msg.includes('undefined')))
      ) {
        return;
      }
      originalConsoleError.apply(console, args);
    };
  }
}

// Guard against browser extensions (e.g. Translation, Grammarly) mutating DOM nodes
// which causes React's reconciler to throw "Failed to execute 'insertBefore' on 'Node'".
if (typeof window !== 'undefined' && typeof Node === 'function' && Node.prototype) {
  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('DOM insertBefore guard: referenceNode parent mismatch prevented error boundary crash.');
      }
      return this.appendChild(newNode);
    }
    return originalInsertBefore.call(this, newNode, referenceNode) as T;
  };

  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child && child.parentNode !== this) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('DOM removeChild guard: child parent mismatch prevented error boundary crash.');
      }
      if (child.parentNode) {
        return child.parentNode.removeChild(child);
      }
      return child;
    }
    return originalRemoveChild.call(this, child) as T;
  };
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element in index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>
);
