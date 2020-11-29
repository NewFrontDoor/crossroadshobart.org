import {NextApiRequest, NextApiResponse} from 'next';
import cors from 'cors';
import initMiddleware from '@newfrontdoor/init-middleware';
import {presignedPost} from '@newfrontdoor/api-create-presigned-post';

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

const createPresignedPost = presignedPost({
  bucket: 'sermons.crossroadshobart.org',
  s3Options: {
    region: 'ap-southeast-2',
    accessKeyId: process.env.AWS_USER_KEY_ID,
    secretAccessKey: process.env.AWS_USER_SECRET
  }
});

async function sermonUpload(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    await corsMiddleware(request as any, response as any);
    const presignedPost = await createPresignedPost(request, response);
    response.status(200).json(presignedPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }

    response.status(500).send('Failed to create presigned post data');
  }
}

export default sermonUpload;
