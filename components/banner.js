/** @jsx jsx */
import React from 'react';
import {jsx, ThemeProvider} from 'theme-ui';
import BlockText from './block-text-serializer';
const Banner = ({header, body}) => {
  return (
    <ThemeProvider
      theme={{
        styles: {
          p: {
            fontSize: 16,
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
            color: 'white'
          },
          a: {
            color: 'gold',
            ':visited': 'white'
          }
        }
      }}
    >
      <div
        sx={{
          background: 'red',
          display: 'block',
          textAlign: 'center',
          padding: '15px',
          color: 'white'
        }}
      >
        <BlockText blocks={body} />
      </div>
    </ThemeProvider>
  );
};

export {Banner};
