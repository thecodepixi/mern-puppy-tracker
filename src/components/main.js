import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import PuppyCard from './puppy-card';
import DeletedAlert from './deletion-alert';

export default ({ puppies }) => {
  let [showAlert, setShowAlert] = useState(false);
  let location = useLocation();

  useEffect(() => {
    if (location.state) {
      setShowAlert(true);
    }
  }, [location]);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <Container maxWidth='lg' id='container'>
      {showAlert ? (
        <DeletedAlert
          puppy={location.state.deletedPuppy}
          closeAlert={closeAlert}
        />
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
