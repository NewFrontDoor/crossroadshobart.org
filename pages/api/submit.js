import sanity from '@sanity/client';
import ky from 'ky-universal';

const client = sanity({
  projectId: 'woz73k85',
  dataset: 'production',
  token: process.env.XRDS_SANITY
});

export default async (req, res) => {
  const doc = {
    _type: 'submission',
    datetime: new Date(),
    values: JSON.stringify(req.body)
  };

  const inputs = {
    targetEmail: 'areader0@gmail.com',
    email: req.body.email,
    message: req.body
  };

  client
    .create(doc)
    .then(result => {
      ky.post('https://crossroadshobart.org/api/send', {
        json: inputs
      }).json();
      return result;
    })
    .then(result => {
      res.status(200).json({outcome: 'Form was submitted', result});
    });
};
