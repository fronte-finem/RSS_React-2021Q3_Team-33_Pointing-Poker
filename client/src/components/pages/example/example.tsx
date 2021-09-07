import React, { useState } from 'react';
import { ExternalLink } from '@client/components/shared/link/external-link';
import { IssueCard } from '@client/components/shared/card/issue-card/issue-card';
import classes from './example.module.css';
import logo from './logo.svg';

export function PageExample() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.example}>
      <header className={classes.exampleHeader}>
        <img src={logo} className={classes.exampleLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <IssueCard
          title="Issue 542"
          priority="Low property"
          isGame
          isCurrent={false}
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
