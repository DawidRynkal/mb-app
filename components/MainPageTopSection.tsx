import Image from "next/image";
import React from "react";

const MainPageTopSection = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto border-b border-solid">
      <div className="flex-1 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
      </div>
      <div className="xl:flex-[1.5] flex justify-start items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[50%] xl:h-full h-[290px] z-0">
          <Image
            src="/hero.png"
            alt="car"
            fill
            sizes="(max-width: 350px)"
            className="object-contain"
          />
        </div>

        <div className="relative -top-[70px] -left-[175px] xl:w-full w-[50%] xl:h-full h-[290px] -z-10">
          <Image
            src="/tire.svg"
            alt="logo"
            fill
            className="absolute object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageTopSection;
