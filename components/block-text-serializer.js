/** @jsx jsx */
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import {Styled, Text, jsx, Link as TULink} from 'theme-ui';
import Link from './link';
import urlFor from '../lib/sanityImg';
import {Form, validation} from '@newfrontdoor/form';
import Card from './card-grid-item';
import HorizontalCard from './horizontal-card-grid-item';
import PeopleCard from './people-card-grid-item';
import HomeCard from './home-card-grid-item';
import Toc from './toc';
import Overlay from './overlay-grid-item';
import PropTypes from 'prop-types';
import {submitForm, slugify} from '../lib/sanity-fns';

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
  const gridTemplateColumns =
    columns == null ? `repeat(auto-fit, minmax(200px, 1fr))` : `repeat(${columns}, 1fr)`;
  return (
    <div className="md:grid gap-3" style={{gridTemplateColumns}}>
      {header && (
        <div sx={{gridColumn: '1/-1', textAlign: 'center', marginTop: '40px'}}>
          <Styled.h1 sx={{fontWeight: 400}}>{header}!</Styled.h1>
        </div>
      )}
      {blocks.map((item) => {
        return item.id ? (
          <div key={item._key} /> // A blank item, with a name on the property 'id'
        ) : (
          <div key={item._key} className="grid grid-template-columns[125px 1fr] md:block">
            {style === 'card' ? (
              <Card {...item} />
            ) : style === 'overlay' ? (
              <Overlay {...item} />
            ) : style === 'horizontal' ? (
              <HorizontalCard {...item} />
            ) : style === 'people' ? (
              <PeopleCard {...item} />
            ) : style === 'homecard' ? (
              <HomeCard {...item} />
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
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
      validationFn={(values) => validation(values, node)}
      blockText={(val) => <BlockText blocks={val} />}
      submitForm={(values) => submitForm(values)}
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

const ExternalLinkSerializer = ({mark, children}) => <Link link={mark.href}>{children}</Link>;

const InlineButtonSerializer = ({children, mark}) => {
  const {action, link, style} = mark;
  if (style === 'ghost') {
    return (
      <Link variant="ghost" sx={{marginLeft: '10px'}} link={link}>
        {children}
      </Link>
    );
  }

  if (style === 'warning') {
    return (
      <Link variant="warning" sx={{marginLeft: '10px'}} link={link}>
        {action}
      </Link>
    );
  }

  return (
    <Link link={link} sx={{marginLeft: '10px'}} link={link}>
      {action}
    </Link>
  );
};

const ButtonSerializer = ({node}) => {
  const {action, link, style} = node;
  if (style === 'ghost') {
    return <Link variant="ghost">{action}</Link>;
  }

  if (style === 'warning') {
    return <Link variant="warning">{action}</Link>;
  }

  return <Link link={link}>{action}</Link>;
};

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

const tocSerializer = (blocks, heading, headingRef) => {
  const data = blocks
    .filter((item) => item.style === headingRef)
    .map((text) => text.children[0].text);
  console.log(data);
  return <Toc data={data} heading={heading} />;
};

const BlockRenderer = (props) => {
  const style = props.node.style || 'normal';

  const elements = {
    h1: <Styled.h1>{props.children}</Styled.h1>,
    h2: <div id={slugify(props.children)}>{props.children}</div>,
    h3: <Styled.h3>{props.children}</Styled.h3>,
    h4: <Styled.h4 id={slugify(props.children)}>{props.children}</Styled.h4>,
    h5: <Styled.h5>{props.children}</Styled.h5>,
    h6: <Styled.h6>{props.children}</Styled.h6>
  };

  if (/^h\d/.test(style)) return elements[style];

  if (style === 'normal') return <Styled.p>{props.children}</Styled.p>;

  if (style === 'blockquote') return <blockquote className="text-xl">{props.children}</blockquote>;

  if (style === 'warning') return <Text variant="warning">{props.children}</Text>;

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

BlockRenderer.propTypes = {
  children: PropTypes.any,
  node: PropTypes.object.isRequired
};

const BlockText = ({blocks}) => {
  function ticToc({node}) {
    const {heading, headingRef} = node;
    return tocSerializer(blocks, heading, headingRef);
  }

  return (
    <BlockContent
      blocks={blocks}
      serializers={{
        types: {
          block: BlockRenderer,
          p: CustomStyleSerializer,
          form: FormSerializer,
          gridblock: GridBlockSerializer,
          image: ImageSerializer,
          button: ButtonSerializer,
          inlineButton: ButtonSerializer,
          toc: ticToc
        },
        marks: {
          anchor: AnchorSerializer,
          internalLink: InternalLinkSerializer,
          link: ExternalLinkSerializer,
          inlineButton: InlineButtonSerializer
        }
      }}
    />
  );
};

BlockText.propTypes = {
  blocks: PropTypes.array.isRequired
};

export default BlockText;
