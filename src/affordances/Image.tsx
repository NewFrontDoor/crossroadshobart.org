import type React from 'react';
import classNames from 'classnames';
import NextImage, {type StaticImageData} from 'next/image';

export default function Image(props: {src: StaticImageData; alt: string; className?: string}) {
  return (
    <NextImage
      alt={props.alt}
      height={400}
      className={classNames('rounded-3xl', props.className)}
      src={props.src}
    />
  );
}
