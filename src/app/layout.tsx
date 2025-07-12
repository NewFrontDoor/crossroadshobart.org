import GoatCounter from 'affordances/GoatCounter';
import './globals.css';
import Navigation from './Navigation';
import Link from 'next/link';

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
    <html lang="en" className="bg-orange-50 text-sky-950 font-sans font-normal text-lg leading-6">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <NoCamp hide={true} />
        <Navigation />
        <main className="flex-1 px-4">{children}</main>

        <footer className="leading-4 p-6 md:p-16 mt-32 bg-[#ede7d1]">
          <div className="max-w-2xl m-auto flex flex-col gap-2 justify-start md:grid grid-cols-5 text-sm md:items-center">
            <span className="col-span-3">
              © Crossroads Presbyterian Church {new Date().getFullYear()}
              <br />
              25 Tasma St, North Hobart TAS 7000, Australia
            </span>
            <div>
              <strong>Resources</strong>
              <ul>
                <li>
                  <Link href="/giving">Giving</Link>
                </li>
                <li>
                  <Link href="/sermons">Sermons</Link>
                </li>
              </ul>
            </div>
            <div>
              <strong>Policies</strong>
              <ul>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
              </ul>
            </div>
          </div>
        </footer>
        <GoatCounter />
      </body>
    </html>
  );
}

function NoCamp(props: {hide: boolean}) {
  if (props.hide) return null;

  return (
    <div className="bg-red-500 text-white text-center p-2">
      There will be no Sunday service on March 23 due to church camp.
    </div>
  );
}
