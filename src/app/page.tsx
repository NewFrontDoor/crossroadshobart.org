import Heading from 'affordances/Heading';
import Image from 'affordances/Image';
import ContactUs from 'features/ContactUs';
import img1 from '../../public/images/1.jpg';
import img2 from '../../public/images/2.jpg';
import img3 from '../../public/images/3.jpg';
import img4 from '../../public/images/4.jpg';
import img5 from '../../public/images/5.jpg';
import img6 from '../../public/images/6.jpg';
import img7 from '../../public/images/7.jpg';
import img8 from '../../public/images/8.jpg';
import img9 from '../../public/images/9.jpg';
import img11 from '../../public/images/11.jpg';
import img12 from '../../public/images/12.jpg';
import img13 from '../../public/images/13.jpg';
import img16 from '../../public/images/16.jpg';
import img17 from '../../public/images/17.jpg';
import img18 from '../../public/images/18.jpg';
import img21 from '../../public/images/21.jpg';

import React from 'react';
import Wrapper from 'affordances/Wrapper';

function ImageWrapper(props: {children: any}) {
  return (
    <div className="flex gap-4 my-8 justify-center overflow-hidden w-dvw ml-[50%] transform-[translate3d(-50%,_0,_0)]">
      {props.children}
    </div>
  );
}

export default function HomePage() {
  return (
    <Wrapper>
      <div className="py-12 px-8 pt-8 mb-6 font-display text-6xl font-normal text-center">
        <Heading level="h0">
          Come and <br />
          meet <span className="text-teal-500 italic">Jesus</span>
        </Heading>
        <ImageWrapper>
          <Image src={img17} alt="" height={400} className="h-32 lg:h-auto" />
          <Image src={img1} alt="" className="h-32 lg:h-auto" />
          <Image src={img8} alt="" className="h-32 lg:h-auto" />
        </ImageWrapper>
      </div>
      <p>
        You’re welcome at Crossroads Presbyterian Church regardless of where you’re from or what you
        believe.
      </p>
      <p>
        We meet Sundays at <strong>4pm. 25 Tasma St, North Hobart</strong>
        <br />
        There’s singing, praying, a talk from the Bible, and a full kids’ program.
      </p>
      <p>
        Crossroads is a group of individuals — singles, couples, and families — who believe that
        Jesus really, actually, lived, died and came back to life. As we live our normal Christian
        lives in Hobart, we trust that God will use us to show more people his love.
      </p>

      <ImageWrapper>
        <Image src={img7} alt="" width={600} height={400} />
        <Image src={img18} alt="" width={600} height={400} />
        <Image src={img9} alt="" />
        <Image src={img11} alt="" />
      </ImageWrapper>

      <Heading level="h2">Other ministries</Heading>

      <ul className="flex flex-col gap-4">
        <li>
          <strong>Growth groups</strong> - We meet in smaller groups during the week to share life,
          study the Bible and pray. Join a growth group.
        </li>
        <li>
          <strong>Kids Zone</strong> - KidsZone is our Friday afternoon ministry for children from
          Prep to Grade 5. KidsZone runs from 4:00pm to 5:30pm and includes a Bible stories, songs,
          games, food and heaps of fun!
        </li>
        <li>
          <strong>Youth</strong> - XYZ is for youth from Grade 6 to Grade 12. They meet on Friday
          Nights from 6:30pm to 8:30pm at 30 Cromwell Street, Battery Point.
        </li>
        <li>
          <strong>Young Adults</strong> - Crossroads Young Adults is for people college-age to 21.
          They meet in Kingston on Tuesday nights from 5:30pm to read and discuss the Bible after a
          shared meal.
        </li>
      </ul>
      <ImageWrapper>
        <Image src={img3} alt="" />
        <Image src={img21} alt="" />
        <Image src={img6} alt="" />
      </ImageWrapper>

      <section>
        <ContactUs />
      </section>

      <ImageWrapper>
        <Image src={img16} alt="" />
        <Image src={img13} alt="" />
        <Image src={img12} alt="" />
        <Image src={img2} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
}
