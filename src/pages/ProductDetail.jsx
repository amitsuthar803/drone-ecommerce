import { useNavigate, useParams } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";

function ProductDetail() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const { dronesData, users, updateCart, currentUserId, handleWishlist } =
    useDroneData();

  const currentUserData = users.find((u) => u.id === currentUserId);

  const isInWishlist = (productId) => {
    return currentUserData?.wishlistItems.includes(productId);
  };

  const [selectProduct] = dronesData.filter((drone) => drone.id === Number(id));

  return (
    <div className="flex w-full lg:mt-[3rem] justify-between h-[100vh] gap-10  max-sm:flex-col lg:items-start">
      <div className="flex-1 relative max-sm:rounded-t-[20px]  flex justify-center max-sm:items-center max-sm:bg-gradient-to-r from-red-500 to-orange-500 ">
        <img
          className="lg:h-[100%] md:h-[60%] sm:h-[40%]"
          src={selectProduct.path}
          alt=""
        />
        <IoIosArrowRoundBack
          onClick={() => navigate("/shop")}
          className=" absolute md:text-slate-400 md:hover:bg-slate-400 md:hover:bg-opacity-20 cursor-pointer  hover:bg-slate-100 hover:bg-opacity-20 left-4 top-4 text-[22px] rounded-full h-[25px] w-[25px] "
        />
      </div>

      <div className=" flex-1 flex p-5 max-sm:bg-[#FFF] z-30  mt-[-60px] max-sm:rounded-t-[20px] md:items-start justify-start flex-col">
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
              onClick={() => setQty((qty) => (qty > 0 ? qty - 1 : 0))}
            >
              <FaMinus size={12} />
            </button>
            <input
              value={qty}
              type="numeric"
              className="lg:w-[50px] bg-transparent  font-semibold w-[40px] text-center py-2  border-x-2"
            ></input>
            <button
              className="lg:px-4 px-2 items-center"
              onClick={() => setQty((qty) => qty + 1)}
            >
              <FaPlus size={12} />
            </button>
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
  );
}

export default ProductDetail;
