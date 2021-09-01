import React, { useState } from 'react';
import { ExternalLink } from '@client/components/shared/link/external-link';
import logo from './logo.svg';
import classes from './app.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
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

export default App;
