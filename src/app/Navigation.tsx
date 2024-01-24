import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/crossroads.svg';
export default function Navigation() {
    return (
        <div className="flex max-w-3xl justify-between m-auto p-4">
            <Image alt="crossroads logo" className="invert" src={Logo} />
            <div className="flex items-center gap-4 font-bold">
                <Link href="/contact-us">About Us</Link>
                <Link href="/contact-us">Kids & Youth</Link>
                <Link href="/contact-us">Contact Us</Link>
            </div>
        </div>
    );
}
