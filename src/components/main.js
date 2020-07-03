import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import PuppyCard from './puppy-card';
import DeletedAlert from './deletion-alert';

export default ({ puppies }) => {
  let location = useLocation();

  return (
    <Container maxWidth='lg' id='container'>
      {location.state ? (
        <DeletedAlert puppy={location.state.deletedPuppy} />
      ) : null}
      <Grid container spacing={3}>
        {puppies.map((puppy) => {
          return (
            <Grid item xs={12} sm={4}>
              <PuppyCard puppy={puppy} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
