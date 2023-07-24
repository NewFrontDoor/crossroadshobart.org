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

const HomeSide = (props) => {
  const {heading, blurb, background} = props;
  return (
    <div className="grid relative grid-cols-2 items-center bg-darkBlue text-white">
      <img
        src={urlFor(background).height(300).url()}
        className="object-cover w-full h-full"
        loading="lazy"
      />

      <div className="px-5">
        {heading && <h2 className="font-heading text-4xl mb-4">{heading}</h2>}

        {blurb && <BlockText blocks={blurb} />}
      </div>
    </div>
  );
};

HomeSide.propTypes = {
  background: PropTypes.object,
  blurb: PropTypes.array,
  heading: PropTypes.string.isRequired
};

export default HomeSide;
