import React from 'react';
import { Button } from '@client/components/shared/button/button';
import { Input } from '@client/components/shared/input/input';
import { Toggle } from '@client/components/shared/toggle/toggle';
import classes from './example.module.css';

export function PageExample() {
  return (
    <div className={classes.example}>
      <Button>Confirm</Button>
      <Button type="default">Cancel</Button>
      <Input size="large" />
      <Toggle />
    </div>
  );
}
