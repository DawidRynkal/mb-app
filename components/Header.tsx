import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div className="lg:container mx-auto px-10 mb-8">
      <div className="w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              MBPower
            </span>
          </Link>
        </div>
        <ul className="font-medium justify-end flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse">
          <Link href={`/articles`}>
            <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Articles
            </span>
          </Link>
          <Link href={`/contact`}>
            <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Contact
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
