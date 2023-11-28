import React from "react";
import Image from "next/image";
import favicon from "../app/favicon.ico";
import { getWorkers } from "@/services";

const WorkersWidget = async () => {
  const { workers } = await getWorkers();

  return (
    <div className="text-black	bg-white h-fit shadow-lg rounded-lg p-4 lg:pb-12 mb-8 min-w-[300px]">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Contact our specialist!
      </h3>
      {workers.map((worker, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div>
            <Image
              unoptimized
              alt="worker"
              width={0}
              height={0}
              className="align-middle rounded-full"
              src={worker.photo.url ? worker.photo.url : favicon}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-md" key={worker.id}>
              {worker.name}
            </p>
            <p>
              <a
                href={`href:${worker.phoneNumber}`}
                className="text-gray-500 font-xs"
              >
                +48 {worker.phoneNumber}
              </a>
            </p>
            <p className="text-md">{worker.profession}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkersWidget;
