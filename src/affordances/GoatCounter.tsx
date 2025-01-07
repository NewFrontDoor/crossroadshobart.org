'use client';
import Script from 'next/script';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

export default function GoatCounter() {
  const path = usePathname();
  useEffect(() => {
    if (path) {
      // @ts-ignore
      window?.goatcounter?.count?.({path});
    }
  }, [path]);
  return (
    <Script
      async
      data-goatcounter="https://crossroads.goatcounter.com/count"
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
    />
  );
}
