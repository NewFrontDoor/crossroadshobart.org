/** @jsx jsx */
import PropTypes from 'prop-types';
import urlFor from '../lib/sanityImg';
import BlockText from './block-text-serializer';
import {jsx, Styled} from 'theme-ui';

const PeopleCard = ({name, body, image}) => {
  return (
    <div>
      <div
        sx={{
          gridColumn: '1/1',
          width: '165px',
          height: '165px',
          margin: '0 auto 40px auto',
          borderRadius: '50%',
          border: '3px solid #63bc50',
          overflow: 'hidden'
        }}
      >
        <img
          src={urlFor(image)
            .width(172)
            .auto('format')
            .url()}
          alt={name}
        />
      </div>
      <Styled.h3
        sx={{
          gridColumn: '1/1',
          maxWidth: '100%',
          textAlign: 'center',
          margin: '0.5em'
        }}
      >
        {name}
      </Styled.h3>

      <div sx={{fontSize: '16px', color: 'text', textAlign: 'center'}}>
        {body}
      </div>
    </div>
  );
};

PeopleCard.propTypes = {
  body: PropTypes.object,
  name: PropTypes.string.isRequired,
  image: PropTypes.any
};

PeopleCard.defaultProps = {
  body: null,
  image: null
};

export default PeopleCard;
