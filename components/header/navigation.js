/** @jsx jsx */
import PropTypes from 'prop-types';
import {useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Navlink from './nav-link';
import Navparent from './nav-parent';
import {jsx} from 'theme-ui';

const navSx = isOpen => ({
  flex: '2 1 auto',
  listStyle: 'none',
  margin: '0',
  alignItems: 'center',
  display: [`${isOpen ? 'block' : 'none'}`, 'flex'],
  position: ['absolute', 'unset'],
  top: '70px',
  right: '0px',
  border: ['#efefef 1px solid', 'none'],
  padding: ['2px', 0],
  borderRadius: '2px',
  backgroundColor: ['background', 'none'],
  color: ['text', 'inherit'],
  width: ['auto', 'initial'],
  flexDirection: [null, 'row'],
  justifyContent: [null, 'flex-end']
});

const Navigation = ({navlinks}) => {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <>
      <div sx={{display: ['block', 'none']}}>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleClick}
          width={27}
          height={22.5}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.3}
        />
      </div>
      <nav sx={navSx(isOpen)} onClick={() => setOpen(false)}>
        {navlinks.map(link => {
          if (!link.childpages) {
            return null;
          }

          return link.childpages.length <= 1 ? (
            <Navlink
              key={link.text}
              link={link.childpages[0].slug.current}
              text={link.text}
            />
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
