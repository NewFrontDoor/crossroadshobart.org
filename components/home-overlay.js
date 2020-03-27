/** @jsx jsx */
import {jsx, Text, Grid} from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import urlFor from '../lib/sanityImg';
import BlockText from './block-text-serializer';

const homeSection = {
  position: 'relative',
  zIndex: '1',
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto'
};

const imageStyle = {
  objectFit: 'cover',
  position: 'absolute',
  top: '0',
  width: '100%',
  height: '100%'
};

const homeSectionInner = {
  gridRow: '1',
  maxWidth: '1000px',
  margin: 'auto',
  textAlign: 'center',
  verticalAlign: 'middle'
};

const HomeOverlay = props => {
  const {heading, blurb, background, isFirstPage} = props;
  return (
    <Grid sx={{padding: '130px 0', height: [null, '550px']}}>
      <img
        src={urlFor(background)
          .height(550)
          .url()}
        sx={imageStyle}
        loading="eager"
      />
      <div sx={homeSection}>
        <div sx={homeSectionInner}>
          {isFirstPage ? (
            <Text as="h1" variant="homeH1">
              {heading}
            </Text>
          ) : (
            heading && (
              <Text as="h2" variant="homeH2">
                {heading}
              </Text>
            )
          )}
          {blurb && <BlockText blocks={blurb} />}
        </div>
      </div>
    </Grid>
  );
};

HomeOverlay.propTypes = {
  background: PropTypes.object,
  blurb: PropTypes.array,
  heading: PropTypes.string.isRequired,
  isFirstPage: PropTypes.bool.isRequired
};

export default HomeOverlay;
