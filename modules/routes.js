import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import RandomBars from './RandomBars';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/:barCount/:minHeight/:maxHeight' component={RandomBars} />
  </Route>
);
