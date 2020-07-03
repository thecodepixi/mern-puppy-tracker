import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default ({ puppy }) => {
  return (
    <Alert color='warning' style={{ marginBottom: '1em' }}>
      <AlertTitle>Goodbye, {puppy.name}!</AlertTitle>
      {puppy.name} has been deleted...
    </Alert>
  );
};
