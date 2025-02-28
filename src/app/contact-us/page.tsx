import ContactUs from 'features/ContactUs';
import React from 'react';

export const metadata = {
  title: 'Contact us'
};

export default function ContactUsPage() {
  return (
    <div className="max-w-2xl m-auto flex flex-col gap-8">
      <ContactUs />
    </div>
  );
}
