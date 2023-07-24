import PropTypes from 'prop-types';
import React from 'react';
import App from 'next/app';
import {ThemeProvider, Styled} from 'theme-ui';
import Head from 'next/head';
import theme from '../theme';
import '../styles/global.css';

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired
};

export default MyApp;
