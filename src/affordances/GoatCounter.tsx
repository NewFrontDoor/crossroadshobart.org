'use client';
import {useEffect} from 'react';

export default function GoatCounter() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.dataset.goatcounter = 'https://crossroads.goatcounter.com/count';
    script.src = 'https://gc.zgo.at/count.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      // @ts-ignore
      window?.goatcounter?.count?.({path: window.location.pathname + window.location.search});
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return null;
}
