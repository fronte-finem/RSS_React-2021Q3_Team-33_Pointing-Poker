import React, { useState } from 'react';
import { ExternalLink } from '@client/components/shared/link/external-link';
import classes from './example.module.css';
import logo from './logo.svg';

export function PageExample() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.example}>
      <header className={classes.exampleHeader}>
        <img src={logo} className={classes.exampleLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((prev) => prev + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <ExternalLink url="https://reactjs.org">Learn React</ExternalLink>
          {' | '}
          <ExternalLink url="https://vitejs.dev/guide/features.html">
            Vite Docs
          </ExternalLink>
        </p>
      </header>
    </div>
  );
}
