interface CustomButtonType {
  btnText: string;
  additionalClass?: string;
  handleClick: () => void;
}

const CustomButton = ({
  btnText,
  additionalClass,
  handleClick,
}: CustomButtonType) => {
  return (
    <button
      onClick={handleClick}
      className={`${additionalClass} transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer`}
    >
      {btnText}
    </button>
  );
};

export default CustomButton;
