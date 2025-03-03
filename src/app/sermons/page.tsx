import Heading from 'affordances/Heading';
import Sermons from 'features/Sermons';
import React from 'react';

export const metadata = {
    title: 'Sermons'
};

export default function Giving() {
    return (
        <div className="max-w-2xl m-auto flex flex-col gap-8">
            <Heading level="h1">Sermons</Heading>
            <Sermons />
        </div>
    );
}
