import Image from 'next/image';
import Link from 'next/link';
import Header from '../../public/header.png';

export default function Navigation() {
  return (
    <div>
      <Image
        src={Header}
        alt="Picture of the Hobart"
        className="object-center object-cover opacity-30 w-full h-72 absolute -z-10"
      />
      <div className="flex max-w-2xl justify-between m-auto py-4">
        <Link href="/">Crossroads</Link>
        <div className="flex items-center gap-6">
          <Link href="/">Sunday Visit</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
