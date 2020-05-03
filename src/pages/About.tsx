import * as React from 'react';
import AboutComponent from '../component/About';

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div>
      <AboutComponent />
    </div>
  );
}
