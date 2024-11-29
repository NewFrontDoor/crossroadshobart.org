import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/crossroads.svg';
export default function Navigation() {
  return (
    <div className="flex max-w-2xl justify-between m-auto py-4">
      <Link href="/">Crossroads</Link>
      <div className="flex items-center gap-6 font-bold">
        <Link href="/">Sunday Visit</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}
