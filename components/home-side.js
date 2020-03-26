/** @jsx jsx */
import {jsx, Text, Grid} from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import urlFor from '../lib/sanityImg';
import BlockText from './block-text-serializer';

const imageStyle = {
  objectFit: 'cover',
  width: '100%',
  height: [null, '100%']
};

const homeSectionInner = {
  margin: '100px 100px',
  textAlign: 'center',
  verticalAlign: 'middle'
};

const HomeSide = props => {
  const {heading, blurb, background} = props;
  return (
    <Grid
      sx={{
        position: 'relative',
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        gap: '0'
      }}
    >
      <img
        src={urlFor(background)
          .height(550)
          .url()}
        sx={imageStyle}
        loading="lazy"
      />

      <div sx={homeSectionInner}>
        {heading && (
          <Text as="h2" variant="homeH2">
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
