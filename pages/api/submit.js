import sanityClient from '@sanity/cli';
const client = sanityClient({
  projectId: 'woz73k85',
  dataset: 'production',
  token: process.env.SANITY_TOKEN
});

export default async (req, res) => {
  const doc = {
    _type: 'submission',
    datetime: new Date(),
    values: req.values
  };

  client.create(doc).then(res => {
    res.status(200).json({outcome: 'Form was submitted'});
  });
};
