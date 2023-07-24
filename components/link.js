import PropTypes from 'prop-types';
import React from 'react';
import NextLink from 'next/link';
import {Link as ThemeUiLink} from 'theme-ui';

const pageLookup = (link) => {
  // This depends on the fact that no sub-subdirectory of pages contains an index file
  if (link.includes('/')) {
    const urlArray = link.split('/');
    urlArray.pop();
    const root = urlArray.reduce((url, element) => {
      return url.concat('/', element);
    });
    return `/${root}/[slug]`;
  }

  switch (link) {
    case '':
    case 'sermons':
    case 'search':
    case 'all-sermons':
      return `/${link}`;
    default:
      return '/[slug]';
  }
};

const regex = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|api|\/api).*/;

const Link = ({link, children, isBlank, hasNoAnchor, passedSx, ...rest}) => {
  if (isBlank) {
    rest.target = '_blank';
    rest.rel = 'noreferrer noopener';
  }

  return regex.test(link) ? (
    <NextLink passHref href={pageLookup(link)} as={`/${link}`}>
      <a>{children}</a>
    </NextLink>
  ) : (
    <ThemeUiLink href={link} sx={passedSx} {...rest}>
      <a>{children}</a>
    </ThemeUiLink>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  link: PropTypes.string,
  isBlank: PropTypes.bool,
  hasNoAnchor: PropTypes.bool,
  passedSx: PropTypes.object
};

Link.defaultProps = {
  link: ''
};

export default Link;
