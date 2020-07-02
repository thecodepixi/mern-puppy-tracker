import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: '90vw',
    margin: 'auto',
  },
  media: {
    height: 400,
  },
});

export default ({ puppy }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            puppy.image_src !== ''
              ? puppy.image_src
              : '/src/images/dog-silhouette.jpg'
          }
          title='A probably adorable pup'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {puppy.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Age: {puppy.age}
          </Typography>
          {!puppy.adopted ? (
            <Typography variant='body2' color='textSecondary' component='p'>
              Available For Adoption
            </Typography>
          ) : (
            <Typography variant='body2' color='textSecondary' component='p'>
              Adopted
            </Typography>
          )}
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          <Link to={'/puppies/' + puppy._id}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
