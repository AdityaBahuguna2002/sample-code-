'use client';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import Link from 'next/link';

const menuItems = [
  {
    name: 'Services',
    path: '/services',
    submenu: [],
  },
  {
    name: 'Industries',
    path: '/industries',
    submenu: [],
  },
  // {
  //   name: 'Products',
  //   path: '#',
  //   submenu: [],
  // },
  {
    name: 'Resources',
    path: '#',
    submenu: [
      { name: 'Blogs', path: '/blog-post' },
      { name: 'Case Studies', path: '/case-study' },
    ],
  },
  {
    name: 'About',
    path: '/about',
    submenu: [],
  },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index); // Toggle submenu
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null); // Reset submenu state
  };

  return (
    <header className="bg-primary-950">
      <nav className="h-20 max-w-7xl w-[87%] mx-auto flex justify-between md:grid grid-cols-12 items-center">
        <Link href="/" className="text-3xl font-bold col-span-2">
          <Image
            alt="company logo"
            src="/Logo/logo1.png"
            width={160}
            height={40}
            className="p-2"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 col-span-8">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link href={item.path}>
                <button className="flex items-center text-sm text-white text-opacity-80 font-normal hover:text-orange-500 transition">
                  {item.name} {item.submenu.length > 0 && <IoIosArrowDown className="w-4 h-4 ml-1" />}
                </button>
              </Link>
              {item.submenu.length > 0 && (
                <div className="absolute z-50 left-0">
                  <div className="mt-2 w-40 border-blue-900 border shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden group-hover:block">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className="block text-nowrap bg-blue-900 text-white px-4 py-2 hover:bg-blue-800"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-6 col-span-2">
          <Link href="#" className="text-white bg-primary-800 p-2 rounded-md font-medium transition">
            <FiSearch size={20} />
          </Link>
          <Link
            href="#"
            className="px-4 py-2 font-medium flex items-center text-sm gap-2 text-white rounded-md bg-[#1B2851] transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden col-span-2 flex justify-end text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-900 text-white py-4 px-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div className="flex flex-col">
                  <Link href={item.path}>
                    <button
                      className="flex items-center w-full text-left text-white text-opacity-80 font-medium hover:text-orange-500 transition"
                      onClick={() => {
                        if (item.submenu.length > 0) {
                          toggleSubmenu(index); // Toggle submenu
                        } else {
                          closeMobileMenu(); // Close menu on link click
                        }
                      }}
                      aria-label={`Navigate to ${item.name} ${item.submenu.length > 0 ? 'and toggle submenu' : ''}`}
                    >
                      {item.name} {item.submenu.length > 0 && <IoIosArrowDown className="w-4 h-4 ml-1" />}
                    </button>
                  </Link>
                  {item.submenu.length > 0 && openSubmenu === index && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className="block px-2 py-1 bg-blue-900 text-white hover:bg-blue-800 rounded-md"
                          onClick={closeMobileMenu} // Close menu on submenu link click
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-4">
            <Link
              href="#"
              className="block text-gray-400 font-medium hover:text-orange-500 transition"
              onClick={closeMobileMenu}
            >
              Support
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 border font-medium border-orange-500 text-center text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;