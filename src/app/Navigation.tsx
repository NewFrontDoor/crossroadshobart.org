import Image from 'next/image';
import Link from 'next/link';
import Header from '../../public/header.png';
import Logo from '../../public/crossroads.svg';

export default function Navigation() {
  return (
    <header>
      <Image
        src={Header}
        alt="Picture of the Hobart"
        className="object-center object-cover opacity-30 w-full h-96 md:h-72 absolute -z-10 hidden md:block"
      />
      <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl justify-between m-auto p-4">
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
