import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

function Product() {
  const category = ["fun", "agri", "industrial", "camera", "racing"];

  return (
    <div className="text-center flex-col flex m-auto w-full justify-center overflow-hidden">
      <div className="text-center mb-5  flex w-full items-start justify-between">
        <button className="flex flex-0  max-sm:text-sm items-center">
          <IoIosArrowRoundBack />
          Back
        </button>

        <div className=" flex-1 w-full flex-col ">
          <h2 className="font-semibold md:text-2xl">
            Get coolest <span>Drone</span> and make your dream.
          </h2>
          <p className="max-sm:text-sm text-gray-500">
            Stretch your mind and fly high
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col items-center justify-start">
          <div className="flex justify-center gap-2 items-center">
            {category.map((cate) => (
              <span
                key={cate}
                className="px-[10px] hover:border-black hover:text-white hover:bg-black cursor-pointer capitalize max-sm:text-sm py-[1px] border-2 rounded-full border-gray-300"
              >
                {cate}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
