'use client';
import Link from 'next/link';
import { US, IN, AE } from 'country-flag-icons/react/3x2';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
      ],
    },
    {
      title: 'Offerings',
      links: [
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Products', path: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blogs', path: '/blog-post' },
        { name: 'Case Studies', path: '/case-study' },
      ],
    },
  ];

  return (
    <footer className="bg-[#00091A] text-white py-10">
      <div className="w-[86%] max-w-7xl mx-auto grid gap-8 grid-cols-2 md:grid-cols-5">
        <div className=" col-span-2">
          <Link href="/" className="text-3xl font-bold">
            <Image
              alt="company logo"
              src="/Logo/logo1.png"
              width={160}
              height={40}
              className="p-2"
            />
          </Link>
          <p className="mt-3 ms-2 text-sm w-[300px] text-white">
            A-4, SIDCUL IT Park Sahastradhara Road Dehradun, Uttarakhand - 248001
          </p>
          <div className="flex items-center ms-1 gap-2 mt-5">
            <span className="rounded-full p-2 bg-white">
              <FaFacebookF size={14} className="text-black cursor-pointer" />
            </span>
            <span className="rounded-full p-2 bg-white">
              <FaTwitter size={14} className="text-black cursor-pointer" />
            </span>
            <span className="rounded-full p-2 bg-white">
              <FaInstagram size={14} className="text-black cursor-pointer" />
            </span>
            <span className="rounded-full p-2 bg-white">
              <FaLinkedinIn size={14} className="text-black cursor-pointer" />
            </span>
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <ul className="mt-2 space-y-2 font-normal text-sm text-white">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="hover:text-orange-500 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 max-w-7xl w-[86%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <div className="flex items-center gap-2">
            <US title="United States" className="w-6 h-6" />
            <span className="border-r-2 border-white text-sm pr-2 text-white">USA</span>
            <IN title="India" className="w-6 h-6" />
            <span className="border-r-2 border-white text-sm pr-2 text-white">India</span>
            <AE title="United Arab Emirates" className="w-6 h-6" />
            <span className="border-r-2 border-white text-sm pr-2 text-white">UAE</span>
          </div>
          <p className="font-medium text-white text-sm">
            © 2024 Cynoteck Technology Solutions. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-4 text-sm text-[#D8D8D8]">
          <Link href="/privacy-policy" className="hover:text-orange-500 transition">
            Privacy & Policy
          </Link>
          <Link href="/terms-conditions" className="hover:text-orange-500 transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}