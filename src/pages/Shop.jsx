import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Modal from "../ui/Modal";

import { useDroneData } from "../context/DroneContext";
import { AiOutlineEye } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";

function Shop() {
  const [showModal, setShowModal] = useState(false);

  const {
    selectedCategory,
    dronesData,
    setSelectedDrone,
    setSelectedCategory,
    category,
    handleWishlist,
    users,
    badgeColor,
    currentUserId,
  } = useDroneData();

  const navigate = useNavigate();

  const filterDrones =
    selectedCategory === "All"
      ? dronesData
      : dronesData.filter((drone) => drone.type === selectedCategory);

  const handleSelect = (drone) => {
    setSelectedDrone(drone);
    setShowModal(true);
    console.log(drone);
  };

  const currentUserData = users.find((u) => u.id === currentUserId);

  const isInWishlist = (productId) => {
    return currentUserData?.wishlistItems.includes(productId);
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="text-center flex-col flex m-auto w-full justify-center overflow-hidden">
      <div className="text-center mb-5  flex w-full items-start justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex flex-0  max-sm:text-sm items-center"
        >
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
          <div className="flex justify-center gap-2 flex-wrap  items-center">
            {category.map((cate) => (
              <span
                key={cate}
                onClick={() => setSelectedCategory(cate)}
                className={`px-[10px] cursor-pointer capitalize max-sm:text-sm py-[1px] rounded-full border-2
                  ${
                    selectedCategory === cate
                      ? "bg-black text-white border-black"
                      : " hover:border-black active:border-black bg-[#FFFFFF]  hover:text-white hover:bg-black "
                  }
                  `}
              >
                {cate}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3  items-start md:gap-14  mt-10 p-2 gap-5 overflow-y-scroll">
          {filterDrones.map((drone) => (
            <div
              key={drone.id}
              className=" max-sm:p-3 p-4 border-[1px] border-[#F6F6F6] shadow-md rounded-lg bg-[#FFFFFF] flex flex-col"
            >
              <div className="py-5 relative rounded-md bg-[#F6F6F6]">
                <img
                  className="w-[250px] m-auto flex items-center justify-center"
                  src={drone.path}
                  alt=""
                />
                <span className="absolute max-sm:top-1 max-sm:left-1  top-2 left-2  bg-[#ececec] p-1 rounded-full">
                  <AiOutlineEye
                    onClick={() => handleSelect(drone)}
                    className=" cursor-pointer max-sm:text-[15px] text-[18px]"
                  />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-4 flex-col justify-between py-4">
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`lg:text-[12px] flex items-center justify-start gap-1  ${badgeColor(
                        drone.type
                      )} rounded-full text-[10px] px-1`}
                    >
                      <GoDotFill />
                      {drone.type}
                    </span>

                    {isInWishlist(drone.id) ? (
                      <PiHeartStraightFill
                        onClick={() => handleWishlist(drone.id)}
                        className=" cursor-pointer text-red-500"
                        size={18}
                      />
                    ) : (
                      <PiHeartStraightBold
                        onClick={() => handleWishlist(drone.id)}
                        className=" cursor-pointer text-red-500"
                        size={18}
                      />
                    )}
                  </div>

                  <div className="flex flex-col w-full  items-start">
                    <h3 className=" text-heading max-sm:text-sm max-sm:font-normal font-semibold">
                      {drone.name}
                    </h3>
                    <span className=" text-[btn_dark] max-sm:text-sm max-sm:font-medium font-medium lg:text-green-600">
                      ₹{drone.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleViewDetails(drone.id)}
                  className="flex items-center capitalize font-semibold text-[.7rem] lg:text-[.8rem] gap-2  py-2 rounded-sm w-full bg-btn_dark text-white  justify-center"
                >
                  <IoCartOutline size={16} />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          className={
            "fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
          }
        />
      )}
    </div>
  );
}

export default Shop;
