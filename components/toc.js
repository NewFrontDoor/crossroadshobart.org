/** @jsx jsx */
import PropTypes from 'prop-types';
import Link from './link';
import {useRouter} from 'next/router';
import {Styled, jsx} from 'theme-ui';
import {slugify} from '../lib/sanity-fns';

const Toc = ({data, heading}) => {
  const router = useRouter();
  return (
    <div>
      <h3>{heading}</h3>
      <Styled.ul>
        {data.map(item => (
          <Styled.li key={item}>
            <Link link={router.asPath.slice(1) + '#' + slugify(item)}>
              {item}
            </Link>
          </Styled.li>
        ))}
      </Styled.ul>
    </div>
  );
};

Toc.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};

export default Toc;
