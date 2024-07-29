import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";
import { useDroneData } from "../context/DroneContext";
import { useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";

function WishlistPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const {
    setSelectedDrone,
    wishlistData,
    badgeColor,
    currentUser,
    handleWishlist,
    wishlistDrones,
  } = useDroneData();

  console.log(wishlistData);

  const isInWishlist = (productId) => {
    return currentUser?.wishlistItems.includes(productId);
  };

  const handleSelect = (drone) => {
    setSelectedDrone(drone);
    setShowModal(true);
    console.log(drone);
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-heading capitalize">
        wishlist
      </h2>
      <div className="grid grid-cols-2  md:grid-cols-3  items-start md:gap-14  mt-10 p-2 gap-5 overflow-y-scroll">
        {wishlistDrones?.map((drone) => (
          <div
            key={drone.id}
            className=" max-sm:p-3 p-4 border-[1px] border-[#F6F6F6] shadow-md rounded-lg bg-[#FFFFFF] flex flex-col"
          >
            <div className="py-5 relative rounded-md bg-[#F6F6F6]">
              <img
                className="w-[250px] m-auto flex items-center justify-center"
                src={drone.imageUrl}
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

export default WishlistPage;
