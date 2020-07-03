import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Puppy from './puppy-card';

export default ({ puppies }) => {
  return (
    <Container maxWidth='lg' id='container'>
      <Grid container spacing={3}>
        {puppies.map((puppy) => {
          return (
            <Grid item xs={12} sm={4}>
              <Puppy puppy={puppy} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
