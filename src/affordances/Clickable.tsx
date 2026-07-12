import type React from 'react';

export default function Clickable({href, children}: {href: string; children: React.ReactNode}) {
  return <a href={href}>{children}</a>;
}
