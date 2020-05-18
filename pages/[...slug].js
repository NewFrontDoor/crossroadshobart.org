/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import {fetchQuery} from '../lib/sanity';
import SanityBlock from '../components/block-text-serializer';
import Layout from '../components/layout';
import {menuQuery, pageQuery, defaultQuery} from '../lib/queries';

const Page = ({menuData, mainData, defaultData}) => {
  const {body} = mainData;

  return (
    <Layout menuData={menuData} mainData={mainData} defaultData={defaultData}>
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
        "mainData": ${pageQuery(query.slug[query.slug.length - 1])},
        "menuData": ${menuQuery},
        "defaultData": ${defaultQuery}
    }`
  );
  return results;
};

export default Page;
