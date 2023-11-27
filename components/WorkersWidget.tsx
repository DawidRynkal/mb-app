import React from "react";
import Image from "next/image";
import Link from "next/link";
import favicon from "../app/favicon.ico";

const workers = [{ name: "Ander" }, { name: "Juan" }];

const WorkersWidget = () => {
  return (
    <div className="bg-white h-fit shadow-lg rounded-lg p-4 lg:pb-12 mb-8 min-w-[300px]">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Contact our specialist!
      </h3>
      {workers.map((worker, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt="image"
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={favicon}
            />
          </div>
          <div className="flex-grow ml-4">
            <Link href={`/person`} className="text-md" key={index}>
              {worker.name}
            </Link>
            <p className="text-gray-500 font-xs">999 888 543</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkersWidget;
