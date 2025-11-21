import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center flex-none" aria-label='Logo'>
      <Image
        src="/images/Logo.png"
        width={60}
        height={60}
        alt="Logo Angela Fisioterapista"
      />
    </Link>
  );
}
