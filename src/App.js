import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import PuppyForm from './components/puppy-form';
import Puppy from './components/puppy';

function App() {
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
      {console.log(puppies)}
      <PuppyForm addNewPuppy={addNewPuppy} />
      {puppies.map((puppy) => {
        return <Puppy puppy={puppy} />;
      })}
    </Container>
  );
}

export default App;
