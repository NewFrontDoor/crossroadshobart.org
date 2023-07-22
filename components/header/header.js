/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import {jsx} from 'theme-ui';
import Link from '../link';
import {ReactComponent as Logo} from '../../public/xrds.svg';
import Navigation from './navigation';

const navSx = {
  padding: '20px 45px 20px 30px',
  backgroundColor: 'background',
  display: 'flex',
  justifyContent: 'space-between'
};

const Header = ({navlinks}) => {
  return (
    <header className="bg-darkBlue py-3 px-4 flex justify-between">
      <Link>
        <Logo height="3rem" />
      </Link>
      <Navigation navlinks={navlinks} />
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
