import Link from 'next/link';

export function Header() {
  return (
    <header className="container">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
