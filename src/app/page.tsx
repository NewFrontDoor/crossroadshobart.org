import ContactUs from 'features/ContactUs';
import React from 'react';

export default function HomePage() {
  return (
    <div className="max-w-2xl m-auto flex flex-col pt-16 gap-16">
      <div className="p-2 font-display text-6xl font-bold text-center">
        <h1>
          Come and <span className="">meet</span> <span className="text-emerald-500">Jesus</span>
        </h1>
      </div>
      <p>
        You’re welcome at Crossroads regardless of where you’re from or what you believe. <br />
      </p>
      <p>
        We meet Sundays at <strong>4pm. 25 Tasma St, North Hobart</strong>
        There’s singing, praying, a talk from the Bible, and a full kids’ program.
      </p>
      <p>
        Crossroads is a group of individuals — singles, couples, and families — who believe that
        Jesus really, actually, lived, died and came back to life. As we live our normal Christian
        lives in Hobart, we trust that God will use us to show more people his love.
      </p>

      <div className="mt-48 mb-16 p-2 font-display text-6xl font-bold text-center">
        <h2>Other ministries</h2>
      </div>

      <ul>
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

      <section>
        <ContactUs />
      </section>
    </div>
  );
}
