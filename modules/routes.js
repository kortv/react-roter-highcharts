import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import RandomBars from './RandomBars';

module.exports = (
  <Route path='/charts' component={App}>
    <IndexRoute component={Home} />
    <Route path='/charts/:barCount/:minHeight/:maxHeight' component={RandomBars} />
  </Route>
);
