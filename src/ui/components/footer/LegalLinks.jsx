import Link from 'next/link';

export default function LegalLinks() {
  return (
    <div className="flex flex-col text-ctext-light lg:col-span-3 col-span-12 lg:items-start items-center lg:pt-0 pt-12">
      <p className="font-bold pb-3 text-2xl">
        Informative
      </p>
      <Link
        href="/privacy-policy"
        className="hover:underline underline-offset-4 py-1 rounded-md font-medium transition-colors">
        Privacy Policy
      </Link>
      <Link
        href="/terms-of-service"
        className="hover:underline underline-offset-4 py-1 rounded-md font-medium transition-colors">
        Terms of Service
      </Link>
      <Link
        href="/cookie-policy"
        className="hover:underline underline-offset-4 py-1 rounded-md font-medium transition-colors">
        Cookie Policy
      </Link>
    </div>
  );
}
