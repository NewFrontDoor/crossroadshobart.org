import S3 from 'aws-sdk/clients/s3';
import mime from 'mime';
import cryptoRandomString from 'crypto-random-string';

const createPresignedPost = params => {
  const s3 = new S3({region: 'ap-southeast-2'}); // Set the region according to the bucket's needs

  return new Promise((resolve, reject) => {
    s3.createPresignedPost(params, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
};

export default async function(data) {
  const name = data.name;
  const requestOrigin = data.headers.origin;
  const contentType = mime.getType(name);
  const key = `${cryptoRandomString({length: 16, type: 'url-safe'})}_${name}`;
  const bucket = 'sermons.crossroadshobart.org';

  const validOrigins = [
    'http://localhost:3000',
    'https://crossroadshobart.sanity.studio',
    'https://crossroadshobart.sanity.studio/dashboard'
  ];

  let origin = null;

  if (validOrigins.includes(requestOrigin)) {
    // Set the header to the requested origin
    origin = requestOrigin;
  }

  const params = {
    Expires: 60,
    Bucket: bucket,
    Conditions: [['content-length-range', 100, 100000000]], // 100Byte - 10MB
    Fields: {
      'Content-Type': contentType,
      key
    }
  };

  try {
    const presignedPostData = await createPresignedPost(params);

    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        error: false,
        data: presignedPostData,
        message: null
      })
    };

    return [null, response];
  } catch (error) {
    return [error];
  }
}
