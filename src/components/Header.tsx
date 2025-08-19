'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="nav-title">
            Nikhil Gangaram
          </Link>
          <div className="nav-links">
            <Link 
              href="/" 
              className={`nav-link ${pathname === '/' ? 'active underline' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`nav-link ${pathname.startsWith('/blog') ? 'active underline' : ''}`}
            >
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}