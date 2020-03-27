const mainQuery = `
*[_type == "main"][0] {
  content[]->{
    ...,
    blurb[]{
      ...,
      _type == 'reference' => @-> {
        ...,
        blocks[] {
          ...,
          _type == 'reference' => @ -> {
            ...,
            'image': mainImage.asset->url,
            'header': title,
            'link': slug.current,
          }
        }
      },
      markDefs[] {
        ...,
        _type == 'internalLink' => {
            'slug': @.reference->slug.current
        }
      }
    },
		details[] {
      ...,
      block[] {
        ...,
        _type == 'reference' => @->
      }
    },
    actions[]{
      "name": _type,
      "url": page->slug.current,
      label
    }
  }
}
`;

const menuQuery = `
*[_type == "main"][0] {
  menuitems[]{
    text,
    childpages[]->{
      title,
      slug,
      'pathname': '/' + slug.current
    }
  },
  "backgroundImage": *[_type == "main"][0].backgroundImage.asset->url
}
`;

const pageQuery = slug => `
*[_type == "page" && '${slug}' match slug.current][0] {
  ...,
  body[]{
    ...,
    _type == 'reference' => @-> {
      ...,
      blocks[] {
        ...,
        _type == 'reference' => @ -> {
          ...,
          'image': mainImage.asset->url,
          'header': title,
          'link': slug.current
        }
      }
    },
    markDefs[] {
      ...,
      _type == 'internalLink' => {
          'slug': @.reference->slug.current
      }
    }
  },
  'mainImageSmall': mainImage.asset->metadata.lqip
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
  "book": passage,
  "url": file,
  "slug": slug.current,
  "image": series->image
} | order(preachedDate desc)
`;

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
    },
		"itunes:image": {'@href': image.asset->url}
}
`;

const sermonSlugQuery = slug => `
*[_type == "sermon" && slug.current == '${slug}'][0] {
  "key": _id,
  title,
  _id,
  preachedDate,
  "speaker": speaker -> name,
  "series": series -> title,
  "book": passage,
  "url": "https://s3-ap-southeast-2.amazonaws.com/sermons.crossroadshobart.org/" + file,
  "slug": slug.current
}
`;

const seriesQuery = `
  *[_type == "series"] {
    ...,
    "id": _id,
    title,
    image,
    "link": ''
  }|order(_updatedAt desc)
`;

const defaultQuery = `
  *[_id == "global-config"][0] {
    "image": logo,
    frontbanner->{
      ...,
      body[]{
        ...,
        _type == 'reference' => @-> {
          ...,
          blocks[] {
            ...,
            _type == 'reference' => @ -> {
              ...,
              'image': mainImage.asset->url,
              'header': title,
              'link': slug.current
            }
          }
        },
        markDefs[] {
          ...,
          _type == 'internalLink' => {
              'slug': @.reference->slug.current
          }
        }
      },
    }
  }
`;

export {
  mainQuery,
  menuQuery,
  pageQuery,
  sermonQuery,
  sermonSlugQuery,
  seriesQuery,
  defaultQuery,
  podcastQuery
};
