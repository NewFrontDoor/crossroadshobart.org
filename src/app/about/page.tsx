import Heading from 'affordances/Heading';
import React, {type ReactNode} from 'react';
import Image, {type StaticImageData} from 'next/image';
import Dan from '../../../public/dan.jpg';
import Lyndal from '../../../public/lyndal.png';
import Mike from '../../../public/mike.jpg';
import Sermons from 'features/Sermons';

export const metadata = {
  title: 'About'
};

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
        <strong>Saved - </strong>
        Hobart is a beautiful place, but, sadly, even here things aren’t right. Thankfully, God is
        not far from each one of us. When he entered our world, Jesus made a way for us to draw near
        to God personally through forgiveness and new life.
      </p>

      <p>
        <strong>Growing - </strong>
        Jesus now is with us by his Spirt. We want to be growing in our relationship with God and
        each other.
      </p>

      <p>
        <strong>Engaged - </strong>
        As we wait for Jesus' return, Christians have a remarkable opportunity to be both salt and
        light in the world.
      </p>

      <Heading level="h2">Pastoral Team</Heading>
      <Person src={Dan} name="Dan Shepheard">
        has been the minister for 17 years. His ministry involves preaching, leading bible
        discussion groups, and prayer. He is also chairman of our elected elders meeting (session).
        His special interested is to share the message of Jesus with those who don't normally attend
        church.
      </Person>
      <Person src={Lyndal} name="Lyndal Jolly">
        has been Operations Manager for 4 years. She oversees teams in which the whole church work
        to see people saved and growing as engaged Christians.
      </Person>
      <Person src={Mike} name="Mike Hall">
        leads our Next Gen ministries for those aged 0-21yrs old. Mike has many years of experience
        in youth ministry both in Sydney and Hobart.
      </Person>

      <Heading level="h2">Sermons</Heading>

      <Sermons />
    </div>
  );
}

function Person(props: {src: StaticImageData; name: string; children: ReactNode}) {
  return (
    <p className="flex items-center">
      <Image
        src={props.src}
        alt={props.name}
        height={128}
        className="rounded-full float-left mr-4"
      />
      <span>
        <strong>{props.name} </strong>
        {props.children}
      </span>
    </p>
  );
}
