/** @jsx jsx */
import {jsx, Text, Grid} from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import urlFor from '../lib/sanityImg';
import BlockText from './block-text-serializer';

const HomeOverlay = (props) => {
  const {heading, blurb, background, isFirstPage} = props;
  return (
    <div className="py-5 bg-white">
      {isFirstPage && (
        <img
          src={urlFor(background).height(350).url()}
          className="object-cover absolute top-0 w-full h-full"
          style={{filter: 'brightness(65%)'}}
          loading="eager"
        />
      )}
      <div className="max-w-3xl m-auto z-10 relative px-3">
        {isFirstPage ? (
          <h1 className="font-heading text-5xl text-white tracking-tight mb-4">{heading}</h1>
        ) : (
          heading && <h2 className="font-heading text-4xl mb-4">{heading}</h2>
        )}
        {blurb && <BlockText blocks={blurb} />}
      </div>
    </div>
  );
};

HomeOverlay.propTypes = {
  background: PropTypes.object,
  blurb: PropTypes.array,
  heading: PropTypes.string.isRequired,
  isFirstPage: PropTypes.bool.isRequired
};

export default HomeOverlay;
