import './globals.css';
import Navigation from './Navigation';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'Crossroads Hobart',
    description: ''
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html
            lang=""
            className={`bg-stone-50 text-amber-950 font-sans font-normal text-lg leading-6`}
        >
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
