import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default ({ puppy, closeAlert }) => {
  return (
    <Alert color='warning' style={{ marginBottom: '1em' }} onClose={closeAlert}>
      <AlertTitle>Goodbye, {puppy.name}!</AlertTitle>
      {puppy.name} has been deleted...
    </Alert>
  );
};
