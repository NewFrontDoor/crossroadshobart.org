/** @jsx jsx */
import PropTypes from 'prop-types';
import urlFor from '../lib/sanityImg';
import {jsx, Styled} from 'theme-ui';

const HomeCard = ({header, description, image}) => {
  if (!image) {
    return <div sx={{borderRight: '1px solid white'}} />;
  }

  return (
    <div sx={{margin: '0'}}>
      <img
        src={urlFor(image)
          .width(37)
          .auto('format')
          .url()}
        alt={header}
        sx={{
          height: '50px',
          gridColumn: '1/1',
          margin: 'auto',
          marginBottom: '40px'
        }}
      />
      <Styled.h3
        sx={{
          gridColumn: '1/1',
          maxWidth: '100%',
          textAlign: 'center',
          margin: '0.5em',
          '::after': {
            content: '""',
            border: 'none'
          }
        }}
      >
        {header}
      </Styled.h3>
      <p
        sx={{
          fontSize: '16px',
          color: 'white',
          maxWidth: '175px',
          margin: 'auto'
        }}
      >
        {description}
      </p>
    </div>
  );
};

HomeCard.propTypes = {
  action: PropTypes.string,
  description: PropTypes.string,
  header: PropTypes.string.isRequired,
  image: PropTypes.any,
  link: PropTypes.string.isRequired
};

HomeCard.defaultProps = {
  action: 'VIEW PAGE',
  description: null,
  shortdescription: null,
  image: null
};

export default HomeCard;
