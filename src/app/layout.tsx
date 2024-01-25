import './globals.css';
import Navigation from './Navigation';
import {Inter} from 'next/font/google';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'Crossroads Hobart',
    description: ''
};

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
    style: ['normal'],
    display: 'swap'
});

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="" className={`font-copy font-normal text-lg leading-6 ${inter.className}`}>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
