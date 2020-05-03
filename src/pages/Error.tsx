import * as React from 'react';
import Title from '../component/Title';

export interface IErrorProps {}

export default function Error(props: IErrorProps) {
  return (
    <div>
      <br />
      <Title name={'Oops, page not found...'} />
    </div>
  );
}
