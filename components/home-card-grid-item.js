/** @jsx jsx */
import PropTypes from 'prop-types';
import urlFor from '../lib/sanityImg';
import {jsx, Styled} from 'theme-ui';

const HomeCard = ({header, description, image}) => {
  if (!image) {
    return <div sx={{borderRight: '1px solid white'}} />;
  }

  return (
    <>
      <h3 className="text-xl font-heading mt-3 mb-2">{header}</h3>
      <p>{description}</p>
    </>
  );
};

HomeCard.propTypes = {
  description: PropTypes.string,
  header: PropTypes.string.isRequired,
  image: PropTypes.any
};

HomeCard.defaultProps = {
  description: null,
  image: null
};

export default HomeCard;
