import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default ({ state }) => {
  return state === 'submitted' ? (
    <Alert severity='info'>
      <AlertTitle>
        <span role='img' aria-label='tada emoji'>
          🎉{' '}
        </span>
        New puppy added!
      </AlertTitle>
    </Alert>
  ) : (
    <Alert severity='danger'>
      <AlertTitle>Please complete the form before submitting...</AlertTitle>
    </Alert>
  );
};
