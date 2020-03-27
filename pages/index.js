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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header navlinks={menuData.menuitems} />
      {defaultData.frontbanner && <Banner {...defaultData.frontbanner} />}
      {content.map((segment, index) => {
        if (segment._type === 'LayoutSpacer') {
          return <Spacer key={segment._id} {...segment} />;
        }

        if (segment.location) {
          return <MapLayout key={segment._id} {...segment} />;
        }

        return (
          <HomeLayout
            key={segment._id}
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
