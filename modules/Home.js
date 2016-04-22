import React from 'react';
import NewBarsHi from './NewBarsHi';

export default function Home() {
  const randomNum = () => (Math.floor(Math.random() * 100) + 1);
  const data = Array(5).fill(1).map(() => randomNum());

  return (<NewBarsHi data={ data } />);
}
