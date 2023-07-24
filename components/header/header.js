import React from 'react';
import PropTypes from 'prop-types';
import Link from '../link';
import {ReactComponent as Logo} from '../../public/xrds.svg';
import Navigation from './navigation';

const Header = ({navlinks}) => {
  return (
    <header className="bg-darkBlue py-3 px-3">
      <div className="flex justify-between m-auto max-w-3xl">
        <Link>
          <Logo height="3rem" />
        </Link>
        <Navigation navlinks={navlinks} />
      </div>
    </header>
  );
};

Header.propTypes = {
  navlinks: PropTypes.arrayOf(
    PropTypes.shape({
      childpages: PropTypes.array.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default Header;
