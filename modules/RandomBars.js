import React from 'react';
import NewBarsHi from './NewBarsHi';

export default function RandomBars(props) {
  const count = props.params.barCount;
  const minHeight = props.params.minHeight;
  const maxHeight = props.params.maxHeight;
  const randomNum = () => (
    Math.abs(Math.round(
      (Math.random() * (maxHeight - minHeight))
    ) + +minHeight));
  const data = Array(+count).fill(1).map(() => randomNum());

  return (<NewBarsHi data={data} />);
}

