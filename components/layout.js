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
      <Grid
        sx={{
          gridTemplateColumns: ['1fr', '1fr 600px 1fr', '1fr 1000px 1fr'],
          gridTemplateRows: [null, '310px 60px 1fr'],
          backgroundImage: `url(${urlFor(menuData.backgroundImage).url()})`,
          backgroundSize: 'contain',
          backgroundRepeatY: 'repeat',
          gridGap: ['0', '16px']
        }}
      >
        <div
          sx={{
            gridColumn: [null, '1/4'],
            gridRow: [null, '1/3'],
            backgroundImage: `url(${urlFor(mainData.mainImage)
              .auto('format')
              .url()}), url(${mainData.mainImageSmall})`,
            width: '100%',
            height: ['200px', '100%'],
            backgroundSize: 'cover',
            backgroundPosition: [null, 'center -50px']
          }}
        />
        <Container
          sx={{
            gridColumn: [null, '2/3'],
            gridRow: [null, '2/4'],
            backgroundColor: 'white',
            padding: [
              '10px',
              '90px 20px 0 20px',
              `90px ${wide ? '20px' : '155px'} 0 ${wide ? '20px' : '155px'}`
            ]
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
