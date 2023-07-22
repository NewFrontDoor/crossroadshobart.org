import PropTypes from 'prop-types';
import {useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Navlink from './nav-link';
import Navparent from './nav-parent';
import className from 'classnames';

const Navigation = ({navlinks}) => {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <>
      <div className="md:hidden p-3">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleClick}
          height={24}
          color="white"
          rotate={0}
          animationDuration={0.25}
        />
      </div>
      <nav
        className={className(
          'list-none md:flex items-center h-screen md:h-auto absolute md:static bg-darkBlue w-screen md:w-auto left-0 top-5rem text-xl md:text-base z-50',
          isOpen ? 'block' : 'hidden'
        )}
        onClick={() => setOpen(false)}
      >
        {navlinks.map((link) => {
          if (!link.childpages) {
            return null;
          }

          return link.childpages.length <= 1 ? (
            <Navlink key={link.text} link={link.childpages[0].slug.current} text={link.text} />
          ) : (
            <Navparent
              key={link.text}
              link={link.childpages[0].slug.current}
              text={link.text}
              childpages={link.childpages}
            />
          );
        })}
      </nav>
    </>
  );
};

Navigation.propTypes = {
  navlinks: PropTypes.arrayOf(
    PropTypes.shape({
      childpages: PropTypes.array.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default Navigation;
