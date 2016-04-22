import React from 'react';
import { Link } from 'react-router';

export default function RandomLink() {
  const rand1 = Math.floor(Math.random() * 9) + 1;
  const rand2 = Math.floor(Math.random() * 100);
  const rand3 = Math.floor(Math.random() * 100);
  return (
    <Link to={`/${rand1}/${rand2}/${rand3}`}>
      Custom Charts
    </Link>);
}
