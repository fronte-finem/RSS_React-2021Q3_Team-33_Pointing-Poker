import React, { useState } from 'react';
import { ExternalLink } from '@client/components/shared/link/external-link';
import { Message } from '@client/components/shared/message/message';
import classes from './example.module.css';
import logo from './logo.svg';

export function PageExample() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.example}>
      <header className={classes.exampleHeader}>
        <img src={logo} className={classes.exampleLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <Message
          firstName="Mark"
          lastName="Single"
          position="junior software engineer"
          isOwner={false}
          isDelete
          message="Hi all! :)"
        />
        <Message
          firstName="John"
          lastName="Dorian"
          position="lead software engineer"
          isOwner
          isDelete
          message="Hello Mark :) What do you thing about issue 1934? How many time would you spend to fix it?"
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
