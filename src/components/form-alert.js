import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default () => {
  return (
    <Alert severity='info'>
      <AlertTitle>
        <span role='img' aria-label='tada emoji'>
          🎉{' '}
        </span>
        New puppy added!
      </AlertTitle>
    </Alert>
  );
};
