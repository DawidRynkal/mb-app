"use client";

import React from "react";

import Link from "next/link";
import Slider from "react-slick";
import defaultImage from "../public/images/defaultBG.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getSliderImagesServer } from "@/services/sliderImagesQuery";
import { Loader } from ".";

const Header = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["sliderImages"],
    queryFn: async () => await getSliderImagesServer(),
  });

  if (isLoading) {
    return <Loader customClass="h-full" />;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const navBackgroundStyle = {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
    padding: "15px 20px",
  };

  return (
    <div className="relative mx-auto mb-8 h-full">
      <div
        className="flex justify-between items-center absolute w-full z-10"
        style={navBackgroundStyle}
      >
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              MBPower
            </span>
          </Link>
        </div>
        <ul className="font-medium justify-end flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
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
      <Slider {...settings}>
        <div className="bg-black w-full h-96 text-white">
          <Image
            src={`${data?.slide1.url}` ?? defaultImage}
            unoptimized
            priority
            width={0}
            height={0}
            alt="car model"
            className="align-middle"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-black w-full h-96 text-white">
          <Image
            src={`${data?.slide2.url}` ?? defaultImage}
            unoptimized
            priority
            width={0}
            height={0}
            alt="car model"
            className="align-middle"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-black w-full h-96	 text-white">
          <Image
            src={`${data?.slide3.url}` ?? defaultImage}
            unoptimized
            priority
            width={0}
            height={0}
            alt="car model"
            className="align-middle"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-black w-full h-96	 text-white">
          <Image
            src={`${data?.slide4.url}` ?? defaultImage}
            unoptimized
            priority
            width={0}
            height={0}
            alt="car model"
            className="align-middle"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Header;
