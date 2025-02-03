'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'nav-link nav-link-active' : 'nav-link';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-4 items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              MyWebsite
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className={isActive('/')}>
              Home
            </Link>
            <Link href="/about" className={isActive('/about')}>
              About
            </Link>
            <Link href="/projects" className={isActive('/projects')}>
              Projects
            </Link>
            <Link href="/contact" className={isActive('/contact')}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
