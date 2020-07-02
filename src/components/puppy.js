import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '90vw',
  },
  media: {
    height: '55vh',
  },
});

export default () => {
  const classes = useStyles();
  let { id } = useParams();
  let [puppy, setPuppy] = useState({});

  useEffect(() => {
    fetch('https://thecodepixi-puppy-api.herokuapp.com/puppies/' + id)
      .then((res) => res.json())
      .then((puppy) => setPuppy(puppy))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Container>
      <Card id='puppy' className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              puppy.image_src !== ''
                ? puppy.image_src
                : '../images/dog-silhouette.jpg'
            }
            title='A probably adorable pup'
          />
          <CardContent align='center'>
            <Typography gutterBottom variant='h2' component='h1' align='center'>
              {puppy.name}
            </Typography>
            <Typography
              variant='h3'
              color='textSecondary'
              component='p'
              gutterBottom
            >
              {puppy.age} months old
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Details:{' '}
              {Object.keys(puppy).map((key) =>
                puppy[key] === true ? (
                  <span>{key.split('_').join(' ')}, </span>
                ) : null
              )}
            </Typography>
            {!puppy.adopted ? (
              <Typography variant='subtitle1' color='secondary' gutterBottom>
                Available for adoption
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Edit
          </Button>
          <Button size='small' color='primary'>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
