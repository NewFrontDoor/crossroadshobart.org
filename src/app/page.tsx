import React from 'react';

export default function HomePage() {
    return (
        <div className="">
            <div className="my-48 p-6 font-display text-6xl font-bold text-center">
                <h1>
                    Come and <span className="">meet</span>{' '}
                    <span className="text-amber-500">Jesus</span>
                </h1>
            </div>
            <div className="absolute z-[-1] top-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 brightness-[.2] p-2">
                {[...Array(64).keys()].map((index) => (
                    <img
                        alt=""
                        className="aspect-square object-cover"
                        key={index}
                        src={`/images/${(index % 16) + 1}.jpg`}
                    />
                ))}
            </div>
        </div>
    );
}
