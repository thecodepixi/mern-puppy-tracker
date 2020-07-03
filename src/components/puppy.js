import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
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
import dogSilhouette from '../images/dogSilhouette.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: '90vw',
  },
  media: {
    height: '55vh',
  },
  title: {
    fontWeight: 300,
    fontSize: '3.5em',
  },
  subtitle: {
    fontWeight: 300,
  },
});

export default () => {
  const classes = useStyles();
  let { id } = useParams();
  let [puppy, setPuppy] = useState({});
  let [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch('https://thecodepixi-puppy-api.herokuapp.com/puppies/' + id)
      .then((res) => res.json())
      .then((puppy) => setPuppy(puppy))
      .catch((err) => console.error(err));
  }, [id]);

  const deletePuppy = (e) => {
    fetch(`https://thecodepixi-puppy-api.herokuapp.com/puppies/${id}`, {
      method: 'DELETE',
    })
      .then(() => setDeleted(true))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      {deleted ? (
        <Redirect
          to={{
            pathname: '/',
            state: { deletedPuppy: puppy },
          }}
        />
      ) : null}
      <Card id='puppy' className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={puppy.image_src !== '' ? puppy.image_src : dogSilhouette}
            title='A probably adorable pup'
          />
          <CardContent align='center'>
            <Typography
              gutterBottom
              variant='h3'
              component='h1'
              align='center'
              className={classes.title}
            >
              {puppy.name}
            </Typography>
            <Typography
              variant='h4'
              color='textSecondary'
              component='p'
              gutterBottom
              className={classes.subtitle}
            >
              {puppy.age} months old
            </Typography>
            <Typography
              variant='h4'
              color='textSecondary'
              component='p'
              gutterBottom
              className={classes.subtitle}
            >
              {puppy.breed}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary' component='p'>
              Details:{' '}
              {Object.keys(puppy).map((key) =>
                puppy[key] === true && key !== 'adopted' ? (
                  <span>{key.split('_').join(' ')} - </span>
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
          <Button size='small' color='primary' onClick={deletePuppy}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
