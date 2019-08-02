import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Components
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/profile' component={Profile} />
    <Route path='/signup' component={SignUp} />
  </Switch>
);
