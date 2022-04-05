import * as React from 'react';

// import markdownStyles from './markdown-styles.module.css';

export const PostBody: React.VFC<{ content: string }> = ({ content }) => {
  return (
    <div //className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
