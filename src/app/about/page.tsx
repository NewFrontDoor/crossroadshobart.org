import Heading from 'affordances/Heading';
import React from 'react';
import Image from 'next/image';
import Dan from '../../../public/dan.jpg';
import Lyndal from '../../../public/lyndal.png';

export default function ContactUsPage() {
  return (
    <div className="max-w-2xl m-auto flex flex-col gap-8">
      <Heading level="h1">Who We Are</Heading>
      <p>
        Crossroads is a group of individuals — singles, couples, and families — who believe that
        Jesus really, actually, lived, died and came back to life. As we live our normal Christian
        lives in Hobart, we trust that God will use us to show more people his love.
      </p>
      <Heading level="h2">Our Beliefs</Heading>
      <p>
        Hobart is a beautiful place, but even here sin and evil continue to operate. Thankfully, the
        Lord Almighty exists way above, beyond and over it all. His plans stand out of reach. This
        is all the more certain now that his perfect son has risen beyond all power, authority and
        even death itself. The call to action is for all of us to rest our hopes on him.
      </p>
      <p>
        And though he is great, God is not far from each one of us. When he entered our world, Jesus
        made a way for us to  draw near to God personally through forgiveness and new life. Jesus
        now is with us by his Spirt.
      </p>
      <p>
        As we wait for Jesus' return, Christians have a remarkable opportunity to be both salt and
        light in the world.
      </p>
      <p>
        All this means we want to see others saved as we are, then growing in their faith as engaged
        Christians.
      </p>
      <Heading level="h2">Pastoral Team</Heading>
      <p>
        <Image
          src={Dan}
          alt="Dan Shepheard"
          height={128}
          className="rounded-full float-left mr-4 "
        />
        <strong>Dan Shepheard</strong> has been the minister for 17 years. His ministry involves
        preaching, leading bible discussion groups, and prayer. He is also chairman of our elected
        elders meeting (session). His special interested is to share the message of Jesus with those
        who don't normally attend church.
      </p>
      <p>
        <Image
          src={Lyndal}
          alt="Lyndal Jolly"
          height={128}
          className="rounded-full float-left mr-4 "
        />
        <strong>Lyndal Jolly</strong> has been Operations Manager for 4 years. She oversees teams in
        which the whole church work to see people saved and growing as engaged Christians.
      </p>

      <Heading level="h2">Sermons</Heading>

      <div className="grid grid-cols-2 gap-5 justify-items-center text-center">
        <figure>
          <figcaption className="mb-2">Isaiah 9</figcaption>
          <audio
            controls
            src="https://sermons.crossroadshobart.org/H3BHqYQm3XN0XgXZ-2024-11-24.mp3"
          />
        </figure>

        <figure>
          <figcaption className="mb-2">Giving Up All For Jesus</figcaption>
          <audio
            controls
            src="https://sermons.crossroadshobart.org/ixQUPcPdzMWbfDGQ-2024-10-27.mp3"
          />
        </figure>

        <figure>
          <figcaption className="mb-2">Luke 4:14–22</figcaption>
          <audio
            controls
            src="https://sermons.crossroadshobart.org/l4UqhZXGPIG19Rd4-2024-10-13.mp3"
          />
        </figure>

        <figure>
          <figcaption className="mb-2">Hebrews 11</figcaption>
          <audio
            controls
            src="https://sermons.crossroadshobart.org/UvmedajBX3nUHtrl-2024-08-04.mp3"
          />
        </figure>
      </div>
    </div>
  );
}
