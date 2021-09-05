import React from 'react';
import { Button } from '@client/components/shared/button';
import classes from './example.module.css';

export function PageExample() {
  return (
    <div className={classes.example}>
      <Button>Confirm</Button>
      <Button type="default">Cancel</Button>
    </div>
  );
}
