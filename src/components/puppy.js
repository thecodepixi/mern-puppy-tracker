import React from 'react';
import { Container, Typography } from '@material-ui/core';

export default ({ puppy }) => {
  return (
    <Container>
      <Typography component='h1' variant='h2'>
        {puppy.name}
      </Typography>
      {Object.keys(puppy).map((key) =>
        key !== '_id' && key !== '__v' && key !== 'image_src' ? (
          <li>
            {key}: {puppy[key].toString()}
          </li>
        ) : key === 'image_src' ? (
          <img src={puppy[key]} alt={puppy.name} />
        ) : null
      )}
    </Container>
  );
};
