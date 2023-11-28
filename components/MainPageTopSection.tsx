import Image from "next/image";
import React from "react";

const MainPageTopSection = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
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
          <Image src="/hero.png" alt="car" fill className="object-contain" />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 top-1/2 md:top-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen md:h-[590px] h-[390px] overflow-hidden">
          <Image src="/logo.png" alt="logo" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default MainPageTopSection;
