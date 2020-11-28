import {IncomingMessage, ServerResponse} from 'http';
import {NextApiRequest, NextApiResponse} from 'next';
import S3 from 'aws-sdk/clients/s3';
import mime from 'mime';
import cors from 'cors';
import path from 'path';
import speakingurl from 'speakingurl';
import cryptoRandomString from 'crypto-random-string';

type RequestHandler = <T>(
  req: IncomingMessage,
  res: ServerResponse,
  callback: (err: Error | null, result?: T) => void
) => void;

type CreatePresignedPostOptions = {
  bucket: string;
  fileName: string;
  accessKeyId: string;
  secretAccessKey: string;
};

async function createPresignedPost({
  bucket,
  fileName,
  accessKeyId,
  secretAccessKey
}: CreatePresignedPostOptions) {
  // Set the region according to the bucket's needs
  const s3 = new S3({
    region: 'ap-southeast-2',
    credentials: {
      accessKeyId,
      secretAccessKey
    }
  });

  const key = createS3Key(fileName);
  const contentType = mime.getType(fileName);

  const parameters: S3.PresignedPost.Params = {
    Expires: 60,
    Bucket: bucket,
    Conditions: [['content-length-range', 100, 100000000]], // 100Byte - 10MB
    Fields: {
      'Content-Type': contentType,
      key
    }
  };

  return new Promise((resolve, reject) => {
    s3.createPresignedPost(parameters, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}

const origin =
  process.env.NODE_ENV === 'production'
    ? 'https://crossroadshobart.sanity.studio'
    : '*';

const corsMiddleware = initMiddleware(
  cors({
    origin,
    methods: ['POST', 'OPTIONS']
  })
);

function initMiddleware(middleware: RequestHandler) {
  return async (request: IncomingMessage, response: ServerResponse) =>
    new Promise((resolve, reject) => {
      middleware(request, response, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }

        return resolve(result);
      });
    });
}

function createS3Key(name: string): string {
  const key = cryptoRandomString({length: 16, type: 'url-safe'});
  const file = path.parse(name);
  const safeFile = path.format({
    name: speakingurl(file.name),
    ext: file.ext
  });
  return `${key}-${safeFile}`;
}

async function sermonUpload(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await corsMiddleware(request, response);
  const {name} = request.body;
  const bucket = 'sermons.crossroadshobart.org';

  try {
    const presignedPostData = await createPresignedPost({
      bucket,
      fileName: name,
      accessKeyId: process.env.AWS_USER_KEY_ID,
      secretAccessKey: process.env.AWS_USER_SECRET
    });

    response.status(200).json(presignedPostData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }

    response.status(500).send('Alan sucks at coding');
  }
}

export default sermonUpload;
