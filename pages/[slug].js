/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import {fetchQuery} from '../lib/sanity';
import SanityBlock from '../components/block-text-serializer';
import Layout from '../components/layout';
import {menuQuery, pageQuery} from '../lib/queries';

const Page = ({menuData, mainData}) => {
  const {body} = mainData;

  return (
    <Layout menuData={menuData} mainData={mainData}>
      <SanityBlock blocks={body} />
    </Layout>
  );
};

Page.propTypes = {
  mainData: PropTypes.object.isRequired,
  menuData: PropTypes.object.isRequired
};

Page.getInitialProps = async ({query}) => {
  const results = await fetchQuery(
    `{
        "mainData": ${pageQuery(query.slug)},
        "menuData": ${menuQuery}
    }`
  );
  return results;
};

export default Page;
