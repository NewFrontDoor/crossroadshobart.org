import React from 'react';

export default function ContactUs() {
  return (
    <>
      <h2>Contact Us</h2>
      We’d love to get to know you and keep you posted about what’s happening in our church
      community. Please fill out our [welcome form] if you have any questions or would like us to
      get in touch.
      <h3>Meetings</h3>
      <p>4.00pm Sundays 25 Tasma St, North Hobart, TAS 7000</p>
      <dl className="grid grid-cols-[auto_1fr] gap-x-2">
        <dt>Email: </dt>
        <dd>info@crossroadshobart.org</dd>
        <dt>Social:</dt>
        <dd>Facebook.com/crossroadshobart </dd>
        <dt>Postal:</dt>
        <dd>188 Macquarie Street, Hobart TAS 7000</dd>
      </dl>
    </>
  );
}
