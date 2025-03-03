import Heading from 'affordances/Heading';
import React from 'react';

export const metadata = {
    title: 'Giving'
};

export default function Giving() {
    return (
        <div className="max-w-2xl m-auto flex flex-col gap-8">
            <Heading level="h1">Giving</Heading>

            <dl className="grid grid-cols-[auto_1fr] gap-x-2">
                <dt className="font-bold">Name</dt>
                <dt>Crossroads Presbyterian Church</dt>
                <dt className="font-bold">BSB</dt>
                <dt>067-000</dt>
                <dt className="font-bold">Account</dt>
                <dt>10289415</dt>
            </dl>
        </div>
    );
}
