import * as React from 'react';
import 'github-markdown-css';
const ReactMarkdown = require('react-markdown');
const breaks = require('remark-breaks');

export interface IMarkdownContainerProps {
  content: string;
}

export default function MarkdownContainer({
  content,
}: IMarkdownContainerProps) {
  return (
    <section className='markdown-container'>
      {
        // eslint-disable-next-line react/jsx-no-undef
        <ReactMarkdown
          className='markdown-body'
          source={content}
          escapeHtml={false}
          plugins={[breaks]}
        />
      }
    </section>
  );
}
