/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import HomeOverlay from './home-overlay';
import HomeSide from './home-side';

const homeSectionBackground = color => ({
  width: '100%',
  position: 'relative',
  backgroundColor: color
});

const HomeLayout = props => {
  const {backgroundColor, style} = props;
  return (
    <section sx={homeSectionBackground(backgroundColor?.hex || '')}>
      {style === 'overlay' && <HomeOverlay {...props} />}
      {style === 'side-by-side' && <HomeSide {...props} />}
    </section>
  );
};

HomeLayout.propTypes = {
  backgroundColor: PropTypes.object,
  style: PropTypes.string.isRequired
};

export default HomeLayout;
