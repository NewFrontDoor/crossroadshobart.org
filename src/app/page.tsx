import React from 'react';

export default function HomePage() {
    return (
        <div className="">
            <div className="mt-48 mb-16 p-2 font-display text-6xl font-bold text-center">
                <h1>
                    Come and <span className="">meet</span>{' '}
                    <span className="text-amber-500">Jesus</span>
                </h1>
            </div>
            <div className="flex w-screen overflow-auto gap-4">
                {[...Array(16).keys()].map((index) => (
                    <img
                        alt=""
                        className="aspect-[1/1.25] object-cover rounded-full size-64"
                        key={index}
                        src={`/images/${(index % 16) + 1}.jpg`}
                    />
                ))}
            </div>
        </div>
    );
}
