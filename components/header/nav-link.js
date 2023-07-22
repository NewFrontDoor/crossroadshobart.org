import PropTypes from 'prop-types';
import Link from '../link';

const Navlink = ({link, text}) => (
  <li className="px-4 py-1 md:p-3">
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
