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

export default () => {
  const [newPuppy, setNewPuppy] = useState({
    name: '',
    age: 0,
    breed: '',
    well_behaved: false,
    cute: false,
    adopted: false,
  });

  const handleChange = (e) => {
    setNewPuppy({
      ...newPuppy,
      [e.target.name]: e.target.value,
    });
    console.log(newPuppy[e.target.name]);
  };

  return (
    <>
      <Container>
        <Typography component='h2' variant='h2'>
          New Puppy
        </Typography>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <FormControl>
            <InputLabel htmlFor='name'>Name</InputLabel>
            <Input
              type='text'
              name='name'
              value={newPuppy.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='breed'>Breed</InputLabel>
            <Input
              type='text'
              name='breed'
              value={newPuppy.breed}
              onChange={handleChange}
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
            />
            <FormControlLabel
              htmlFor='well_behaved'
              name='well_behaved'
              value='true'
              control={<Checkbox color='primary' />}
              label='Well Behaved?'
              labelPlacement='start'
            />
            <FormControlLabel
              htmlFor='adopted'
              name='adopted'
              value='true'
              control={<Checkbox color='primary' />}
              label='Adopted?'
              labelPlacement='start'
            />
          </FormGroup>
          <Button type='submit'>Add Puppy</Button>
        </form>
      </Container>
      <Divider />
    </>
  );
};
