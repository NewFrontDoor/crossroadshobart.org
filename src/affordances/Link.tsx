import type React from 'react';

export default function Link({href, children}: {href?: string; children?: React.ReactNode}) {
  return (
    <a
      href={href ?? '/'}
      className="underline text-blue-500 visited:text-purple-500"
    >
      {children}
    </a>
  );
}
