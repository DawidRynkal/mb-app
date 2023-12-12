"use client";

import Image from "next/image";
import React, { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { CarType } from "@/types";

interface ChartZoomProps {
  isOpenChart: boolean;
  closeModal: () => void;
  carChartImg: string;
}

const ChartZoom = ({
  isOpenChart,
  closeModal,
  carChartImg,
}: ChartZoomProps) => {
  return (
    <>
      <Transition appear show={isOpenChart} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
                <Dialog.Panel className="relative w-full h-full overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    {" "}
                    x
                  </button>

                  <div className="flex">
                    <div className="relative w-full object-contain cursor-pointer">
                      <Image
                        src={carChartImg}
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
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    // <>
    //   <Transition appear show={isOpenChart} as={Fragment}>
    //     <Dialog as="div" className="relative z-20" onClose={closeModal}>
    //       <div className="flex-1 flex flex-col gap-2">
    //         <h2 className="font-semibold text-xl capitalize">tekst</h2>
    //       </div>
    //       {/* <Image
    //       src={chartImage}
    //       unoptimized
    //       priority
    //       width={0}
    //       height={0}
    //       alt="car model"
    //       className="align-middle"
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         objectFit: "cover",
    //       }}
    //     /> */}
    //     </Dialog>
    //   </Transition>
    // </>
  );
};

export default ChartZoom;
