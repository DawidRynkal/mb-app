"use client";

import { Fragment, useState } from "react";
import Image from "next/image";

import { CarType } from "@/types";
import { Transition, Dialog } from "@headlessui/react";
import { ChartZoom } from ".";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
}

const TableRow = ({ label, value }: any) => (
  <tr className="border-b border-primary-blue-200">
    <td className="py-2 px-4 text-left">{label}</td>
    <td className="py-2 px-4 text-right">{value}</td>
  </tr>
);

const CarDetails = ({
  isOpen,
  closeModal,
  car: { node: carDetails },
}: CarDetailsProps) => {
  const [isOpenChart, setIsOpenChart] = useState(false);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    {" "}
                    x
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-semibold text-xl capitalize">
                        {carDetails.model} {carDetails.subModel}
                      </h2>
                    </div>

                    <div className="relative w-full h-40 my-3 object-contain">
                      <Image
                        src={carDetails.carImage.url}
                        unoptimized
                        priority
                        width={0}
                        height={0}
                        alt="car model"
                        className="align-middle rounded-full"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="flex flex-col">
                      <table className="min-w-full bg-primary-blue-100 rounded-lg">
                        <tbody>
                          <TableRow label="Engine" value={carDetails.engine} />
                          <TableRow
                            label="Fuel type"
                            value={carDetails.fuelType}
                          />
                          <TableRow
                            label="Transmission"
                            value={carDetails.transmission}
                          />
                          <TableRow
                            label="Power before"
                            value={`${carDetails.powerBeforeKm}Hp`}
                          />
                          <TableRow
                            label="Power after"
                            value={`${carDetails.powerAterKm}Hp`}
                          />
                          <TableRow
                            label="Niutonometers before"
                            value={`${carDetails.niutonometerBeforeNm}Nm`}
                          />
                          <TableRow
                            label="Niutonometers after"
                            value={`${carDetails.niutonometeAfterNm}Nm`}
                          />
                        </tbody>
                      </table>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-semibold text-xl capitalize">
                        Power up chart
                      </h2>
                    </div>

                    <div
                      onClick={() => setIsOpenChart(true)}
                      className="relative w-full h-40 my-3 object-contain cursor-pointer"
                    >
                      <Image
                        src={carDetails.powerUpImage.url}
                        unoptimized
                        priority
                        width={0}
                        height={0}
                        alt="chart"
                        className="align-middle"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <ChartZoom
                      isOpenChart={isOpenChart}
                      closeModal={() => setIsOpenChart(false)}
                      carChartImg={carDetails.powerUpImage.url}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
