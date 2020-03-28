import sanity from '@sanity/client';

const client = sanity({
  projectId: 'woz73k85',
  dataset: 'production',
  token: process.env.SAN_FORM
});

export default async (req, res) => {
  const doc = {
    _type: 'submission',
    datetime: new Date(),
    values: req.values
  };

  client.create(doc).then(result => {
    res.status(200).json({outcome: 'Form was submitted', result});
  });
};
