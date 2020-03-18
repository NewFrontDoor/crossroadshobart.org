/** @jsx jsx */
import PropTypes from 'prop-types';
import {ReactComponent as Clock} from './clock.svg';
import {ReactComponent as Location} from './location.svg';
import {jsx, Text} from 'theme-ui';
import BlockText from '../block-text-serializer';

const types = {
  location: <Location />,
  time: <Clock />
};

const MapOverlay = ({details}) => {
  return (
    <div sx={{display: 'contents'}}>
      {details.length > 0 &&
        details.map(detail => {
          console.log(detail);
          return (
            <div
              key={detail.value}
              sx={{
                padding: '60px',
                textAlign: 'center',
                width: '350px',
                svg: {
                  margin: 'auto',
                  height: '50px',
                  width: '30px'
                }
              }}
            >
              {types[detail.type]}
              <Text variant="homeH2" sx={{color: 'white'}}>
                {detail.value}
              </Text>

              <BlockText blocks={detail.block} />
            </div>
          );
        })}
    </div>
  );
};

MapOverlay.propTypes = {
  actions: PropTypes.array.isRequired,
  details: PropTypes.array.isRequired,
  heading: PropTypes.string,
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired
};

export default MapOverlay;
