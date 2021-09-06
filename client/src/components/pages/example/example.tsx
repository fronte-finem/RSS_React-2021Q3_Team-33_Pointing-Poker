import React, { useState } from 'react';
import { ExternalLink } from '@client/components/shared/link/external-link';
import { Avatar } from '@client/components/shared/avatar/avatar';
import classes from './example.module.css';
import logo from './logo.svg';

export function PageExample() {
  const [count, setCount] = useState(0);
  const avatarContent = {
    firstName: 'John',
    lastName: 'Dorian',
  };

  return (
    <div className={classes.example}>
      <header className={classes.exampleHeader}>
        <img src={logo} className={classes.exampleLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <Avatar content={avatarContent} mod={{ size: 83 }} />
        <p>
          <button
            type="button"
            className={classes.exampleButton}
            onClick={() => setCount((prev) => prev + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>example.tsx</code> and save to test HMR updates.
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
