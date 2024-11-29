import React from 'react';

export default function HomePage() {
  return (
    <div className="max-w-2xl m-auto flex flex-col pt-16 gap-16">
      <div className="p-2 font-display text-6xl font-bold text-center">
        <h1>
          Come and <span className="">meet</span> <span className="text-emerald-500">Jesus</span>
        </h1>
      </div>
      <div className="flex w-screen width-screen gap-2 ml-[calc((-100vw_+_100%)_/_2)] mr-[calc((-100vw_+_100%)_/_2)] overflow-hidden">
        {[...Array(16).keys()].map((index) => (
          <img
            alt=""
            className="aspect-square object-cover rounded-full size-48"
            key={index}
            src={`/images/${(index % 16) + 1}.jpg`}
          />
        ))}
      </div>
      <p>
        You’re welcome at Crossroads regardless of where you’re from or what you believe. <br />
        We meet Sundays at 4pm. <strong>25 Tasma St, North Hobart</strong> There’s singing, praying,
        a talk from the Bible, and a full kids program.{' '}
      </p>
      Crossroads is a group of individuals, singles, couples and families who believe that Jesus
      really, actually, lived, died and came back to life. As we live our normal Christian lives in
      Hobart, we trust that God will use us to add more people to his church.
      <div className="mt-48 mb-16 p-2 font-display text-6xl font-bold text-center">
        <h1>Saved, Growing, and Engaged</h1>
      </div>
    </div>
  );
}
