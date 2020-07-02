import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Grid, Divider } from '@material-ui/core';
import PuppyForm from './puppy-form';
import Puppy from './puppy-card';

function Main() {
  const [puppies, setPuppies] = useState([]);

  const addNewPuppy = (puppy) => {
    setPuppies(puppies.concat(puppy));
  };

  useEffect(() => {
    fetch('https://thecodepixi-puppy-api.herokuapp.com/puppies')
      .then((resp) => resp.json())
      .then((puppies) => setPuppies(puppies))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container maxWidth='lg' id='container'>
      <PuppyForm addNewPuppy={addNewPuppy} />
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
}

export default Main;
