/** @jsx jsx */
import {jsx, Text, Grid} from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import urlFor from '../lib/sanityImg';
import BlockText from './block-text-serializer';

const imageStyle = {
  objectFit: 'cover',
  position: 'absolute',
  top: '0',
  width: '100%',
  height: '100%',
  gridColumn: '1/1'
};

const homeSectionInner = {
  gridRow: '1',
  margin: '0 100px',
  textAlign: 'left',
  verticalAlign: 'middle',
  gridColumn: '2/2'
};

const HomeSide = props => {
  const {heading, blurb, background} = props;
  return (
    <Grid
      sx={{
        padding: '130px 0',
        position: 'relative',
        gridTemplateColumns: '2fr 2fr',
        gap: '0'
      }}
    >
      <img
        src={urlFor(background)
          .height(550)
          .url()}
        sx={imageStyle}
      />

      <div sx={homeSectionInner}>
        {heading && (
          <Text
            as="h2"
            variant="homeH2"
            sx={{
              '::after': {
                content: '""',
                display: 'block',
                width: '130px',
                margin: 0,
                marginTop: '20px',
                borderBottom: '2px dotted',
                borderColor: 'accent'
              }
            }}
          >
            {heading}
          </Text>
        )}

        {blurb && (
          <div sx={{variant: 'text.homeBlurb', textAlign: 'left'}}>
            <BlockText blocks={blurb} />
          </div>
        )}
      </div>
    </Grid>
  );
};

HomeSide.propTypes = {
  background: PropTypes.object,
  blurb: PropTypes.array,
  heading: PropTypes.string.isRequired
};

export default HomeSide;
