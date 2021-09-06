import React, { useState } from 'react';
import { ExternalLink } from '@client/components/shared/link/external-link';
import { UserCard } from '@client/components/shared/card/user-card/user-card';
import classes from './example.module.css';
import logo from './logo.svg';

export function PageExample() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.example}>
      <header className={classes.exampleHeader}>
        <img src={logo} className={classes.exampleLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <UserCard
          content={{
            firstName: 'John',
            lastName: 'Dorian',
            position: 'lead software engineer',
            isOwner: true,
            isDelete: true,
          }}
        />
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
