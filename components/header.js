import Link from 'next/link';

export default function Header() {
  return (
    <nav className="typography-footnote tracking-tight md:tracking-tighter leading-tight pb-4 mt-4">
      <Link href="/">
        <a className="hover:underline">Back</a>
      </Link>
    </nav>
  );
}
