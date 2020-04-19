import * as React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div className='loading'>
      <Spinner
        animation='grow' variant="secondary"
      />
      <span>Loading...</span>
    </div>
  );
}
