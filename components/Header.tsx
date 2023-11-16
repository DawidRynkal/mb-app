import React, { useState, useEffect } from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              MBPower
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <Link href={`/page-1`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              page 1
            </span>
          </Link>
          <Link href={`/page-2`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              page 2
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
