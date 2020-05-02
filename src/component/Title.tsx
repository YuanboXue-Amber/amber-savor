import * as React from 'react';

export interface ITitleProps {
  name: string;
}

export default function Title ({name}: ITitleProps) {
  return (
    <div className='myTitle'>
      <span>{name}</span>
    </div>
  );
}
