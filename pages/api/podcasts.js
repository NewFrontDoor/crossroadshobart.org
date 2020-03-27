import * as builder from 'xmlbuilder';
import sanity from '../../lib/sanity';

const buildFeedObject = ({
  title,
  url,
  _id,
  filesize,
  description,
  pubDate,
  duration,
  passage,
  speaker
}) => {
  return {
    title: {'#text': title},
    link: {'#text': url},
    description: {'#text': description},
    enclosure: {
      '@url': url,
      '@type': 'audio/mpeg',
      '@length': filesize
    },
    guid: {
      '#text': _id
    },
    pubDate: {'#text': new Date(pubDate).toUTCString()},
    'itunes:subtitle': {'#text': passage},
    'itunes:explicit': {'#text': false},
    'itunes:summary': {'#text': description},
    'itunes:duration': {'#text': duration},
    'itunes:author': {'#text': speaker}
  };
};

const podcastQuery = `
*[_type == "podcast"][0] {
    title,
    description,
    language,
    "link": "https://crossroadshobart.org",
    "category": [
        {"#text": "crossroads"},
        {"#text": "gospel"}
    ],
    copyright,
    "managingEditor": email + " (" + name + ")",
    "webMaster": "info@newfrontdoor.org (New Front Door)",
    "ttl": 300,
    "itunes:subtitle": subtitle,
    "itunes:category": {
        '@text': category[0],
         "itunes:category": category[1..2]{"@text": @}
    },
    "itunes:keywords": keywords,
    "itunes:image": image->url,
    "itunes:author": author,
    "itunes:explicit": explicit,
    "itunes:owner": {
        "itunes:email": email,
        "itunes:name": name
    }
}
`;

const sermonQuery = `
    *[_type == "sermon"] {
    "key": _id,
    title,
    _id,
    "pubDate": _createdAt,
    preachedDate,
    description,
    filesize,
    duration,
    "speaker": speaker->name,
    "series": series->title,
    passage,
    "image": series->image,
    "url": "https://s3-ap-southeast-2.amazonaws.com/sermons.crossroadshobart.org/" + file,
    "slug": slug.current
    } | order(preachedDate desc)
    `;

export default async (req, res) => {
  try {
    const podcastData = await sanity.fetch(podcastQuery);
    podcastData.pubDate = new Date().toUTCString();
    podcastData.lastBuildDate = new Date().toUTCString();
    const sermonData = await sanity.fetch(sermonQuery);
    const feedObject = {
      rss: {
        '@version': '2.0',
        '@xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
        '@xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
        channel: {
          ...podcastData,
          item: []
        }
      }
    };

    for (const item of sermonData) {
      if (typeof item.url !== 'undefined') {
        feedObject.rss.channel.item.push(buildFeedObject(item));
      }
    }

    const podcast = builder.create(feedObject, {
      version: '1.0',
      encoding: 'utf-8'
    });

    if (res) {
      res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');
      res.setHeader('Content-Type', 'application/xml');
      res.statusCode = 200;
      res.end(podcast.end({pretty: true}));
    }

    return;
  } catch (error) {
    return {error: 404, value: error};
  }
};
