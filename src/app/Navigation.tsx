import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/crossroads.svg';
export default function Navigation() {
    return (
        <div className="flex max-w-4xl justify-between m-auto p-4">
            <Link href="/">Crossroads</Link>
            <div className="flex items-center gap-6 font-bold">
                <Link href="/">Sunday Visit</Link>
                <Link href="/ministries">Ministries</Link>
                <Link href="/about">About</Link>
                <Link href="/contact-us">Contact Us</Link>
            </div>
        </div>
    );
}
