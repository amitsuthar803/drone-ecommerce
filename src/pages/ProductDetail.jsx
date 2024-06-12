import { useParams } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function ProductDetail() {
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const { dronesData, handleWishList } = useDroneData();

  const [selectProduct] = dronesData.filter((drone) => drone.id === Number(id));

  return (
    <div className="flex w-full lg:mt-[3rem] justify-between h-[100vh]  max-sm:flex-col lg:items-start">
      <div className="flex-1 max-sm:rounded-t-[20px]  flex justify-center max-sm:items-center max-sm:bg-gradient-to-r from-red-500 to-orange-500 ">
        <img
          className="lg:h-[100%] md:h-[60%] sm:h-[50%]"
          src={selectProduct.path}
          alt=""
        />
      </div>

      <div className=" flex-1 flex p-5 max-sm:bg-gray-100  mt-[-20px] max-sm:rounded-t-[20px] md:items-start justify-start flex-col">
        <h1 className="font-semibold text-[1.2rem] lg:text-[1.5rem]">
          {selectProduct.name}
        </h1>
        <h4 className="mt-2 font-semibold text-[#2a9d8f]">
          ₹{selectProduct.price}
        </h4>

        <div className="flex mt-3 items-center lg:text-md text-sm  gap-5">
          <h4 className="font-semibold text-gray-500">Quantity:</h4>
          <div className="border-2 lg:py-0">
            <button
              className="lg:px-4 px-2"
              onClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}
            >
              <FaMinus size={12} />
            </button>
            <input
              value={count}
              type="numeric"
              className="lg:w-[80px] bg-gray-200 font-semibold w-[50px] text-center py-2  border-x-2"
            ></input>
            <button
              className="lg:px-4 px-2 items-center"
              onClick={() => setCount((count) => count + 1)}
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>

        <div className="flex mt-5  lg:text-[1rem] text-sm gap-2">
          <h4 className="font-semibold text-gray-500">Description:</h4>
          <p className="text-gray-500">{selectProduct.description}</p>
        </div>

        <div className="flex items-center gap-5 mt-4  justify-center">
          <button className="bg-black border-none max-sm:px-2 max-sm:text-sm  px-4  h-10 border-2  max-sm:h-8   gap-2 max-sm:text-center justify-center text-white flex items-center  rounded-sm">
            <IoCartOutline size={16} />
            Add To Cart
          </button>
          <button
            onClick={() => handleWishList(selectProduct.id)}
            className="max-sm:px-2  px-4  h-10 border-2  max-sm:h-8  border-gray-300 rounded-sm "
          >
            {selectProduct.wishlist ? (
              <AiFillHeart
                key={selectProduct.id}
                className=" cursor-pointer lg:text-[22px] text-[20px] text-red-500"
              />
            ) : (
              <AiOutlineHeart
                key={selectProduct.id}
                className=" cursor-pointer lg:text-[22px] text-[20px] text-red-500"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
