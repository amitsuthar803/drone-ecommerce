import { useNavigate, useParams } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";

function ProductDetail() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const { dronesData, currentUser, updateCart, handleWishlist } =
    useDroneData();

  const isInWishlist = (productId) => {
    return currentUser?.wishlistItems.includes(productId);
  };

  const [selectProduct] = dronesData.filter((drone) => drone.id === Number(id));

  return (
    selectProduct && (
      <div className="flex justify-between w-full gap-5   mt-2 h-screen   max-sm:flex-col">
        {/* img */}

        <div className="relative max-sm:pb-10 max-sm:rounded-xl   max-sm:items-center  max-sm:bg-gradient-to-r from-slate-100 to-gray-300 max-sm:w-full  w-1/2 flex items-start  justify-center">
          <img
            className=" object-contain w-[80%]"
            src={selectProduct.imageUrl}
            alt=""
          />
          <IoIosArrowRoundBack
            onClick={() => navigate("/shop")}
            className=" absolute md:text-slate-400 md:hover:bg-slate-400 md:hover:bg-opacity-20 cursor-pointer  hover:bg-slate-100 hover:bg-opacity-20 left-[20px] top-4 text-[22px] rounded-full h-[25px] w-[25px] "
          />
        </div>
        {/* data */}
        <div className="w-1/2 max-sm:w-full flex p-5 max-sm:bg-[#ffffff]  max-md:z-10  max-sm:mt-[-60px] max-sm:rounded-t-[20px] md:items-start justify-start flex-col">
          <h1 className="font-semibold text-[1.2rem] lg:text-[1.5rem]">
            {selectProduct.name}
          </h1>
          <h4 className="mt-2 font-semibold text-[#2a9d8f]">
            ₹{selectProduct.price}
          </h4>

          <div className="flex mt-3 items-center lg:text-md text-sm  gap-5">
            <h4 className="font-semibold text-gray-500">Quantity:</h4>

            <div
              className={`max-sm:w-[70px] border-2 border-[#DFDFDF] max-sm:h-[25px] w-[80px]  py-1 flex items-center justify-center rounded-sm`}
            >
              <span
                className=" text-[#CECECE] cursor-pointer w-full text-center font-semibold"
                onClick={() => setQty((qty) => (qty > 0 ? qty - 1 : 0))}
              >
                -
              </span>

              <span className=" w-full text-heading   border-[rgba(0,0,0,0.2)] text-center font-semibold max-sm:text-[12px] text-[16px]">
                {qty}
              </span>
              <span
                className="  text-[#CECECE]  cursor-pointer w-full text-center font-semibold"
                onClick={() => setQty((qty) => qty + 1)}
              >
                +
              </span>
            </div>
          </div>

          <div className="flex mt-5  lg:text-[1rem] text-sm gap-2">
            <h4 className="font-semibold text-gray-500">Description:</h4>
            <p className="text-gray-500">{selectProduct.description}</p>
          </div>

          <div className="flex items-center gap-5 mt-4 max-sm:justify-center  justify-start">
            <button
              onClick={() => updateCart(selectProduct.id, "add", qty)}
              className="bg-black border-none max-md:px-2 max-sm:text-sm  px-4  h-10 border-2  max-md:h-8   gap-2 max-sm:text-center justify-center text-white flex items-center  rounded-sm"
            >
              <IoCartOutline size={16} />
              Add To Cart
            </button>
            <button
              onClick={() => handleWishlist(selectProduct.id, "add")}
              className="max-md:px-2  px-4  h-10 border-2  max-md:h-8  border-gray-300 rounded-sm "
            >
              {isInWishlist(selectProduct.id) ? (
                <PiHeartStraightFill
                  key={selectProduct.id}
                  className=" cursor-pointer lg:text-[22px] text-[20px] text-red-500"
                />
              ) : (
                <PiHeartStraightBold
                  key={selectProduct.id}
                  className=" cursor-pointer lg:text-[22px] text-[20px] text-red-500"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
