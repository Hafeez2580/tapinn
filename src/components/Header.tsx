'use client';
import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="/zego.png" alt="Logo" className="h-8 mr-4" />
          <h1 className="text-white text-xl font-bold">Your Site Name</h1>
        </div>
        
        {/* Button on mobile screens */}
        <button
          className="block sm:hidden text-white focus:outline-none"
          onClick={toggleLinks}
        >
          {showLinks ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* List items - hidden on mobile screens */}
      <ul className={`sm:flex ${showLinks ? 'flex' : 'hidden'} space-x-4 mt-4 sm:mt-0`}>
        <li>
          <Link className='className="text-white hover:text-gray-300"' href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className='className="text-white hover:text-gray-300"' href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className='className="text-white hover:text-gray-300"' href="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className='className="text-white hover:text-gray-300"' href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
