'use client';

import {useEffect, useState} from 'react';

export default function ConnectForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const script = document.createElement('script');
    script.src = 'https://crossroadshobart.elvanto.com.au/form/963e3951-d731-4ff6-894b-ee4c6554ed8c.js?el_id=6313';
    script.async = true;

    const container = document.getElementById('elvanto-form-6313');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="flex flex-col gap-4">
      <div id="elvanto-form-6313" />
    </div>
  );
}
