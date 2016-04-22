import React from 'react';
import { Link } from 'react-router';
import RandomLink from './RandomLink';

export default function (props) {
  return (
    <div>
      <h1>React Router Highcharts</h1>
      <ul role='nav'>
        <li><Link to='/charts/'>Home</Link></li>
        <li><RandomLink /></li>
      </ul>
      {props.children}
    </div>
  );
}
