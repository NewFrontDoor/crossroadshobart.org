/** @jsx jsx */
import React from 'react';
import {jsx, Grid, Container, Styled} from 'theme-ui';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
import Head from 'next/head';
import urlFor from '../lib/sanityImg';
import {Banner} from './banner';

const Layout = ({menuData, defaultData, mainData, wide, children}) => {
  return (
    <div>
      <Head>
        <title>{mainData.title} | Crossroads Hobart</title>
      </Head>
      <Header navlinks={menuData.menuitems} />
      {defaultData.frontbanner && <Banner {...defaultData.frontbanner} />}
      <div
        sx={{
          gridColumn: [null, '1/4'],
          gridRow: [null, '1/3'],
          backgroundImage: `url(${urlFor(mainData.mainImage).auto('format').url()}), url(${
            mainData.mainImageSmall
          })`,
          width: '100%',
          height: '200px',
          backgroundSize: 'cover',
          backgroundPosition: [null, 'center -50px']
        }}
      />
      <div className="px-3 py-4 max-w-3xl m-auto">
        <h1 className="text-4xl font-heading">{mainData.title}</h1>
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  menuData: PropTypes.object.isRequired,
  mainData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Layout;
