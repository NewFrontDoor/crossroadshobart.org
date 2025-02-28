import GoatCounter from 'affordances/GoatCounter';
import './globals.css';
import Navigation from './Navigation';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    template: '%s — Crossroads Presbyterian Church',
    default: 'Crossroads Presbyterian Church'
  },
  description: `We are an afternoon church in the city of Hobart. Our message is Jesus Christ and finding God through him. Kid's, Youth and Young Adult Ministries are important to us.`
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-amber-50 text-sky-950 font-sans font-normal text-lg leading-6">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1 px-4">{children}</main>

        <footer className="text-center leading-4 p-16 mt-32 bg-[#ede7d1]">
          <small>
            © Crossroads Presbyterian Church {new Date().getFullYear()}
            <br />
            25 Tasma St, North Hobart TAS 7000, Australia
          </small>
        </footer>
        <GoatCounter />
      </body>
    </html>
  );
}
