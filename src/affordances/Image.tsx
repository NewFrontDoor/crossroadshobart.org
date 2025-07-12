import type React from 'react';
import classNames from 'classnames';
import NextImage, {type StaticImageData} from 'next/image';

export default function Image(props: {
  src: StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <NextImage
      alt={props.alt}
      height={props.height ?? 400}
      className={classNames('rounded-xl lg:rounded-3xl h-32 lg:h-auto', props.className)}
      src={props.src}
    />
  );
}
