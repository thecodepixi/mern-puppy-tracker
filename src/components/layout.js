import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import PuppyForm from './puppy-form';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: '1em',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

export default ({ addNewPuppy }) => {
  let [showForm, setShowForm] = useState(false);
  const classes = useStyles();

  const showFormToggle = () => {
    showForm ? setShowForm(false) : setShowForm(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography
            variant='h6'
            className={classes.title}
            color='inherit'
            aria-label='menu'
          >
            <Link to='/' className={classes.link}>
              Puppies!
            </Link>
          </Typography>
          <Button color='inherit' onClick={showFormToggle}>
            Add Puppy
          </Button>
        </Toolbar>
      </AppBar>
      {showForm ? <PuppyForm addNewPuppy={addNewPuppy} /> : null}
    </div>
  );
};
