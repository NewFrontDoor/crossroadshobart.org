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

export default async function({name}) {
  const contentType = mime.getType(name);
  const key = `${cryptoRandomString({length: 16, type: 'url-safe'})}_${name}`;
  const bucket = 'sermons.crossroadshobart.org';
  const origin = 'https://crossroadshobart.sanity.studio';

  const params = {
    Expires: 60,
    Bucket: bucket,
    Conditions: [['content-length-range', 100, 100000000]], // 100Byte - 10MB
    Fields: {
      'Content-Type': contentType,
      key
    }
  };

  console.log(params);

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
