import Heading from 'affordances/Heading';
import React from 'react';

export default function ContactUs() {
  return (
    <div className="flex flex-col gap-4">
      <Heading level="h2">Contact Us</Heading>
      <p>
        We’d love to get to know you and keep you posted about what’s happening in our church
        community. Please fill out our{' '}
        <a
          className="text-blue-500 visited:purple-500"
          href="https://crossroadshobart.elvanto.com.au/form/963e3951-d731-4ff6-894b-ee4c6554ed8c"
        >
          welcome form
        </a>{' '}
        if you have any questions or would like us to get in touch.
      </p>

      <div className="font-display text-2xl font-bold mt-8">
        <h3>Meetings</h3>
      </div>
      <p>4.00pm Sundays 25 Tasma St, North Hobart, TAS 7000</p>
      <dl className="grid grid-cols-[auto_1fr] gap-x-2">
        <dt className="font-bold">Email</dt>
        <dd>
          <a
            className="text-blue-500 visited:text-purple-500"
            href="mailto:info@crossroadshobart.org"
          >
            info@crossroadshobart.org
          </a>
        </dd>
        <dt className="font-bold">Social</dt>
        <dd>
          <a
            className="text-blue-500 visited:text-purple-500"
            href="//facebook.com/crossroadshobart"
          >
            facebook.com/crossroadshobart
          </a>
        </dd>
        <dt className="font-bold">Postal</dt>
        <dd>188 Macquarie Street, Hobart TAS 7000</dd>
      </dl>
    </div>
  );
}
