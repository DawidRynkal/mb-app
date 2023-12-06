"use client";

import { getCarsServer } from "@/services/carsQuery";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CarCard, CustomButton, ErrorFetch, Loader } from ".";
import { CarType } from "@/types";

const CarCardWrapper = () => {
  const [loadedData, setLoadedData] = useState<CarType[]>([]);
  const [carsNum, setCarsNum] = useState<number>(1);
  const { data, isError, isFetching } = useQuery({
    queryKey: ["cars", carsNum],
    queryFn: async ({ queryKey }) => await getCarsServer(queryKey[1] as number),
  });

  useEffect(() => {
    if (data) {
      setLoadedData(data.edges);
    }
  }, [data]);

  const handleShowMore = () => {
    setCarsNum((prev) => prev + 1);
  };

  if (isError) {
    return <ErrorFetch errorMessage="Something went wrong, try later..." />;
  }
  return (
    <>
      <h1 className="mt-8 text-3xl font-semibold">Check our projects!</h1>
      <p className="text-[18px] text-black-100 font-light mt-5">
        Streamline your car rental experience with our effortless booking
        process.
      </p>
      <section>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
          {loadedData.map((car) => (
            <CarCard key={car.node.id} node={car.node} />
          ))}
        </div>
      </section>
      {isFetching && (
        <div className="mb-8 mt-8">
          <Loader />
        </div>
      )}
      {loadedData.length > 0 && data?.pageInfo.hasNextPage && (
        <CustomButton
          additionalClass="mt-8"
          btnText="Show more"
          handleClick={handleShowMore}
        />
      )}
    </>
  );
};

export default CarCardWrapper;
