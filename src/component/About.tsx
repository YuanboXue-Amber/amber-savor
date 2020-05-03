import * as React from 'react';
import Title from '../component/Title';
import MarkdownContainer from './MarkdownContainer';

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const content = 'This is a site made by Amber, to keep her recipes';
  return (
    <div>
      <Title name={'About'} />
      <div className='about-content'>
        <MarkdownContainer content={content} />
      </div>
    </div>
  );
}
