import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      
      <p className="font-bold">ACME</p>
    </div>
    <ul className="flex items-center gap-4">
      <li><Link href="#">Features</Link></li>
      <li><Link href="#">Pricing</Link></li>
    </ul>
  </header>
</nav>
    </div>
  );
};

export default NavBar;