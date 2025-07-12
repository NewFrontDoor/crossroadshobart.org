import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/crossroads.svg';

export default function Navigation() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center gap-4  justify-between m-auto py-4 p-8">
        <Link href="/">
          <Image alt="Crossroads Presbyterian Church Logo" src={Logo} />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/">Sunday Visit</Link>
          <Link href="/about">About</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
