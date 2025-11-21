import Heading from 'affordances/Heading';
import Image from 'affordances/Image';
import ConnectForm from 'features/ConnectForm';
import React from 'react';
import bible from '../../../public/images/bible.jpg';

export const metadata = {
  title: 'Giving'
};

export default function Giving() {
  return (
    <div className="max-w-2xl m-auto flex flex-col gap-8">
      <Heading level="h1">Jesus</Heading>

      <p>Even today people are still interested in Jesus. Rightly so!</p>
      <p>
        Christians believe Jesus is God come among us. He lived courageously, sacrificially and
        compassionately. He died for people, for their full forgiveness. He rose again to life
        bringing about all God's promises of peace and Justice. He will return again.
      </p>
      <p>
        If you're reconnecting with spirituality and asking big questions, you can (and should!)
        start with Jesus. Fill out our connect form to inquire about visiting church or reading the
        Gospels with a pastor or experienced church member.
      </p>

      <ConnectForm />
    </div>
  );
}
