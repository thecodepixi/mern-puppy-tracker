import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  InputLabel,
  Input,
  Checkbox,
  Divider,
  Button,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

export default ({ addNewPuppy }) => {
  const defaultState = {
    name: '',
    age: 0,
    breed: '',
    image_src: '',
    well_behaved: false,
    cute: false,
    adopted: false,
    errors: false,
    submitted: false,
  };
  const [newPuppy, setNewPuppy] = useState(defaultState);

  const handleChange = (e) => {
    setNewPuppy({
      ...newPuppy,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://thecodepixi-puppy-api.herokuapp.com/puppies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPuppy),
    })
      .then((resp) => resp.json())
      .then((puppy) => addNewPuppy(puppy.data));
    setNewPuppy({
      ...defaultState,
      submitted: true,
    });
  };

  return (
    <>
      <Container>
        {newPuppy.submitted ? (
          <Alert severity='info'>
            <AlertTitle>
              <span role='img' aria-label='tada emoji'>
                🎉{' '}
              </span>
              New puppy added!
            </AlertTitle>
          </Alert>
        ) : null}
        <Typography component='h2' variant='h2'>
          New Puppy
        </Typography>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit}
        >
          <FormControl>
            <InputLabel htmlFor='name'>Puppy Name</InputLabel>
            <Input
              type='text'
              name='name'
              value={newPuppy.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='breed'>Breed</InputLabel>
            <Input
              type='text'
              name='breed'
              value={newPuppy.breed}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='age'>Age</InputLabel>
            <Input
              type='number'
              name='age'
              min='0'
              max='12'
              value={newPuppy.age}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='image_src'>Puppy Picture Link</InputLabel>
            <Input
              type='text'
              name='image_src'
              value={newPuppy.image_src}
              onChange={handleChange}
            />
          </FormControl>
          <FormGroup row>
            <FormControlLabel
              htmlFor='cute'
              name='cute'
              value='true'
              control={<Checkbox color='primary' />}
              label='Cute?'
              labelPlacement='start'
              onChange={handleChange}
            />
            <FormControlLabel
              htmlFor='well_behaved'
              name='well_behaved'
              value='true'
              control={<Checkbox color='primary' />}
              label='Well Behaved?'
              labelPlacement='start'
              onChange={handleChange}
            />
            <FormControlLabel
              htmlFor='adopted'
              name='adopted'
              value='true'
              control={<Checkbox color='primary' />}
              label='Adopted?'
              labelPlacement='start'
              onChange={handleChange}
            />
          </FormGroup>
          <Button color='primary' type='submit'>
            Add Puppy
          </Button>
        </form>
      </Container>
      <Divider />
    </>
  );
};
