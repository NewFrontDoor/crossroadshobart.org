import PropTypes from 'prop-types';
import Link from '../link';

const Navlink = ({link, text}) => (
  <li className="py-1 px-3 md:px-0">
    <Link link={link} variant="nav">
      {text}
    </Link>
  </li>
);

Navlink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Navlink;
