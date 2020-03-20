/** @jsx jsx */
import React from 'react';
import {jsx, Grid, Container, Styled} from 'theme-ui';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
import Head from 'next/head';
import urlFor from '../lib/sanityImg';

const Layout = ({menuData, mainData, wide, children}) => {
  return (
    <div>
      <Head>
        <title>{mainData.title} | Crossroads Hobart</title>
      </Head>
      <Header navlinks={menuData.menuitems} />
      <Grid
        sx={{
          gridTemplateColumns: '1fr 1000px 1fr',
          gridTemplateRows: '310px 60px 1fr',
          backgroundImage: `url(${urlFor(menuData.backgroundImage).url()})`,
          backgroundSize: 'contain',
          backgroundRepeatY: 'repeat'
        }}
      >
        <div
          sx={{
            gridColumn: '1/4',
            gridRow: '1/3',
            backgroundImage: `url(${urlFor(mainData.mainImage).auto('format').url()}), url(${mainData.mainImageSmall})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center -50px'
          }}
        />
        <Container
          sx={{
            gridColumn: '2/3',
            gridRow: '2/4',
            backgroundColor: 'white',
            padding: `90px ${wide ? '20px' : '155px'} 100px ${wide ? '20px' : '155px'}`
          }}
        >
          <Styled.h1>{mainData.title}</Styled.h1>
          {children}
        </Container>
      </Grid>
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
