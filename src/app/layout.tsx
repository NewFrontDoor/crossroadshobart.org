import './globals.css';
import Navigation from './Navigation';
import {Nunito} from 'next/font/google';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'Crossroads Hobart',
    description: ''
};

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap'
});

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="" className={`font-copy leading-[1.5] ${nunito.className}`}>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
