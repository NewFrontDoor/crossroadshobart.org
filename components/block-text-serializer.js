/** @jsx jsx */
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import {Styled, Text, jsx} from 'theme-ui';
import Link from './link';
import urlFor from '../lib/sanityImg';
import {Form, validation} from '@newfrontdoor/form';
import GridBlock from './grid-block';
import Card from './card-grid-item';
import HorizontalCard from './horizontal-card-grid-item';
import PeopleCard from './people-card-grid-item';
import HomeCard from './home-card-grid-item';
import Overlay from './overlay-grid-item';
import PropTypes from 'prop-types';

const CustomStyleSerializer = ({children}) => {
  return <Styled.p>{children}</Styled.p>;
};

CustomStyleSerializer.propTypes = {
  children: PropTypes.string.isRequired
};

const AnchorSerializer = ({children, mark}) => {
  return <span id={mark.id}>{children}</span>;
};

AnchorSerializer.propTypes = {
  children: PropTypes.array.isRequired,
  mark: PropTypes.object.isRequired
};

const ImageSerializer = ({node}) => {
  return <img src={urlFor(node).url()} />;
};

ImageSerializer.propTypes = {
  node: PropTypes.node.isRequired
};

const GridBlockSerializer = ({node: {header, blocks, columns, style}}) => {
  return (
    <GridBlock
      items={blocks}
      columns={
        (columns === undefined) | null
          ? `repeat(auto-fit, minmax(200px, 1fr))`
          : `repeat(${columns}, 1fr)`
      }
      columnRawValue={(columns === undefined) | null ? 1 : columns}
      gap="40px"
      style={style}
      margin="150px -155px 150px -155px"
      padding="0 40px 150px 40px"
      header={header}
      renderProp={(data, style) =>
        style === 'card' ? (
          <Card {...data} />
        ) : style === 'overlay' ? (
          <Overlay {...data} />
        ) : style === 'horizontal' ? (
          <HorizontalCard {...data} />
        ) : style === 'people' ? (
          <PeopleCard {...data} />
        ) : style === 'homecard' ? (
          <HomeCard {...data} />
        ) : (
          ''
        )
      }
    />
  );
};

GridBlockSerializer.propTypes = {
  node: PropTypes.shape({
    blocks: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.number,
    style: PropTypes.string.isRequired
  }).isRequired
};

const FormSerializer = ({node}) => {
  return (
    <Form
      {...node}
      validationFn={values => validation(values, node)}
      blockText={val => <BlockText blocks={val} />}
      submitForm={values => console.log(values)}
    />
  );
};

FormSerializer.propTypes = {
  node: PropTypes.object.isRequired
};

const InternalLinkSerializer = ({mark, children}) => (
  <Link link={mark.slug}>
    <Styled.a>{children}</Styled.a>
  </Link>
);

const ExternalLinkSerializer = ({mark, children}) => (
  <Link link={mark.href}>{children}</Link>
);

InternalLinkSerializer.propTypes = {
  children: PropTypes.array.isRequired,
  mark: PropTypes.shape({
    slug: PropTypes.string
  }).isRequired
};

ExternalLinkSerializer.propTypes = {
  children: PropTypes.array.isRequired,
  mark: PropTypes.shape({
    href: PropTypes.string
  }).isRequired
};

const BlockRenderer = props => {
  const style = props.node.style || 'normal';

  const elements = {
    h1: <Styled.h1>{props.children}</Styled.h1>,
    h2: <Styled.h2>{props.children}</Styled.h2>,
    h3: <Styled.h3>{props.children}</Styled.h3>,
    h4: <Styled.h4>{props.children}</Styled.h4>,
    h5: <Styled.h5>{props.children}</Styled.h5>,
    h6: <Styled.h6>{props.children}</Styled.h6>
  };

  if (/^h\d/.test(style)) return elements[style];

  if (style === 'normal') return <Styled.p>{props.children}</Styled.p>;

  if (style === 'blockquote')
    return <Text variant="pageBlurb">{props.children}</Text>;

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

BlockRenderer.propTypes = {
  children: PropTypes.any,
  node: PropTypes.object.isRequired
};

const BlockText = ({blocks}) => {
  return (
    <BlockContent
      blocks={blocks}
      serializers={{
        types: {
          block: BlockRenderer,
          p: CustomStyleSerializer,
          form: FormSerializer,
          gridblock: GridBlockSerializer,
          image: ImageSerializer
        },
        marks: {
          anchor: AnchorSerializer,
          internalLink: InternalLinkSerializer,
          link: ExternalLinkSerializer
        }
      }}
    />
  );
};

BlockText.propTypes = {
  blocks: PropTypes.array.isRequired
};

export default BlockText;
