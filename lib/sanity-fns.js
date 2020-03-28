import client from './sanity';

const defaults = {nonTextBehavior: 'remove'};

export function blocksToText(blocks, opts = {}) {
  const options = Object.assign({}, defaults, opts);
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`;
      }

      return block.children.map(child => child.text).join('');
    })
    .join('\n\n');
}

export function submitForm(values) {
  const doc = {
    _type: 'submission',
    datetime: new Date(),
    values
  };

  client.create(doc).then(res => {
    console.log(`Form was submitted`);
  });
}
