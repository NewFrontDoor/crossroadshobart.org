/** @jsx jsx */
import PropTypes from 'prop-types';
import Link from './link';
import urlFor from '../lib/sanityImg';
import BlockText from './block-text-serializer';
import {jsx, Styled} from 'theme-ui';

const actionSx = {
  margin: 'auto',
  textDecoration: 'none',
  padding: '11px 23px',
  border: '2px solid #52934f',
  color: '#52934f',
  ':hover': {
    borderColor: '#63bc50',
    backgroundColor: '#63bc50',
    color: '#fff'
  }
};

const LinkWrapper = ({link, children}) =>
  link ? <Link link={link}>{children}</Link> : children;

const Card = ({header, description, shortdescription, image, link, action}) => {
  return (
    <div>
      <LinkWrapper link={link}>
        <img
          src={urlFor(image)
            .width(275)
            .auto('format')
            .url()}
          alt={header}
          sx={{
            width: '100%',
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
            margin: '0.5em'
          }}
        >
          {header}
        </Styled.h3>
      </LinkWrapper>
      <p sx={{fontSize: '16px', color: 'black'}}>{description}</p>
      {shortdescription && <Styled.p>{shortdescription}</Styled.p>}
      {link && (
        <div
          sx={{
            display: 'flex',
            gridColumn: '1/1',
            textAlign: 'center'
          }}
        >
          <Link link={link} passedSx={actionSx}>
            {action}
          </Link>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  action: PropTypes.string,
  description: PropTypes.object,
  shortdescription: PropTypes.string,
  header: PropTypes.string.isRequired,
  image: PropTypes.any,
  link: PropTypes.string.isRequired
};

Card.defaultProps = {
  action: 'VIEW PAGE',
  description: null,
  shortdescription: null,
  image: null
};

export default Card;
