import Image from "next/image";

interface ErrorFetchType {
  errorMessage: string;
  addidtionalClass?: string;
}

const ErrorFetch = ({ errorMessage, addidtionalClass }: ErrorFetchType) => {
  return (
    <div
      className={`${addidtionalClass} flex items-center justify-center h-[300px] bg-gray-100`}
    >
      <div className="text-center">
        <Image
          src="/sadFace.png"
          unoptimized
          width={100}
          height={100}
          alt="sad emoji"
          className="mx-auto mb-4"
        />
        <div className="text-red-500 text-lg font-bold">{errorMessage}</div>
      </div>
    </div>
  );
};

export default ErrorFetch;
