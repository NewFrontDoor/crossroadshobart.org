import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/header.js';
import Head from 'next/head';
import Footer from '../components/footer/footer';
import {fetchQuery} from '../lib/sanity';
import HomeLayout from '../components/home-layout';
import MapLayout from '../components/map/map-layout';
import Spacer from '../components/layout-spacer';
import {mainQuery, menuQuery, defaultQuery} from '../lib/queries';
import {Banner} from '../components/banner';

const Home = ({mainData, menuData, defaultData}) => {
  const {content} = mainData;
  return (
    <div>
      <Head>
        <title>Home | Crossroads Hobart</title>
      </Head>
      <Header navlinks={menuData.menuitems} />
      {defaultData.frontbanner && <Banner {...defaultData.frontbanner} />}
      {content.map((segment, index) => {
        if (segment._type === 'LayoutSpacer') {
          return <Spacer {...segment} />;
        }

        if (segment.location) {
          return <MapLayout key={'map' + index} {...segment} />;
        }

        return (
          <HomeLayout
            key={segment.heading}
            {...segment}
            isFirstPage={index === 0}
          />
        );
      })}
      <Footer />
    </div>
  );
};

Home.propTypes = {
  mainData: PropTypes.object.isRequired,
  menuData: PropTypes.object.isRequired
};

Home.getInitialProps = async () => {
  const results = await fetchQuery(
    `{
        "mainData": ${mainQuery},
        "menuData": ${menuQuery},
        "defaultData": ${defaultQuery}
    }`
  );

  return results;
};

export default Home;
