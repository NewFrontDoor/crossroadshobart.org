import NextLink from 'next/link';
import type React from 'react';

export default function Clickable({href, children}: {href: string; children: React.ReactNode}) {
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  );
}
