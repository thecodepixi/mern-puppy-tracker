import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPuppies from './components/main';
import Puppy from './components/puppy';
import Layout from './components/layout';

function App() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    fetch('https://thecodepixi-puppy-api.herokuapp.com/puppies')
      .then((resp) => resp.json())
      .then((puppies) => setPuppies(puppies))
      .catch((err) => console.error(err));
  }, [puppies]);

  const addNewPuppy = (puppy) => {
    setPuppies(puppies.concat(puppy));
  };

  return (
    <Router>
      <Layout addNewPuppy={addNewPuppy} />
      <Switch>
        <Route exact path='/'>
          <AllPuppies puppies={puppies} />
        </Route>
        <Route path='/puppies/:id' children={<Puppy />} />
      </Switch>
    </Router>
  );
}

export default App;
