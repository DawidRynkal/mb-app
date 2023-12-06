"use client";

import { useState } from "react";
import Image from "next/image";
import { CarType } from "@/types";
import { CustomButton } from ".";

const CarCard = ({ node }: CarType) => {
  const {
    model,
    subModel,
    engine,
    transmission,
    fuelType,
    powerBeforeKm,
    niutonometerBeforeNm,
    powerAterKm,
    niutonometeAfterNm,
    carImage,
    powerUpImage,
  } = node;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {model} {subModel}
        </h2>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={carImage.url}
          unoptimized
          priority
          width={0}
          height={0}
          alt="car model"
          className="align-middle rounded-full"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              unoptimized
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">{transmission}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              unoptimized
              src="/tire.svg"
              width={20}
              height={20}
              alt="seat"
            />
            <p className="text-[14px] leading-[17px]">{engine}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              unoptimized
              src="/gas.svg"
              width={20}
              height={20}
              alt="seat"
            />
            <p className="text-[14px] leading-[17px]">{fuelType}</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            btnText="Show details"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} /> */}
    </div>
  );
};

export default CarCard;
