import Heading from 'affordances/Heading';
import React from 'react';

export const metadata = {
    title: 'Giving'
};

export default function Giving() {
    return (
        <div className="max-w-2xl m-auto flex flex-col gap-8">
            <Heading level="h1">Giving</Heading>

            <p>
                At Crossroads we partner together to see people saved and growing as engaged
                Christians. Financial giving is a component of this. In God's word we see examples
                of monetary gifts and offerings as a shared, spiritual activity (2 Cor 8-9, Phil
                4.10-20). We genuinely offer thanks to God for all who give week-by-week.
            </p>

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
