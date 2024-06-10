import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Modal from "../ui/Modal";

import { useDroneData } from "../context/DroneContext";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

function Shop() {
  const [showModal, setShowModal] = useState(false);
  const [wishList, setWishlist] = useState([]);

  const {
    selectedCategory,
    dronesData,
    setSelectedDrone,
    setSelectedCategory,
    category,
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

  const badgeColor = (type) => {
    switch (type) {
      case "Underwater":
        return "bg-[#0080a721] text-[#0081a7]";
      case "Fun":
        return "bg-[#ef233b1d] text-[#ef233c]";
      case "Industrial":
        return "bg-[#ffb9082f] text-[#ee9b00]";
      case "Agri":
        return "bg-[#57cc9924] text-[#43aa8b]";
      case "Li-dar":
        return "bg-[#90a95534] text-[#31572c]";
      case "Camera":
        return "bg-[#e4e4e4] text-[#1C2C42]";
      case "Racing":
        return "bg-[#1c2c4218] text-[#bf0603]";
      default:
        return ""; // Default to no border
    }
  };
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const toggleWishlist = (drone) => {
    if (wishList.includes(drone.id)) {
      // If already in wishlist, remove it
      setWishlist(wishList.filter((itemId) => itemId !== drone.id));
    } else {
      // If not in wishlist, add it
      setWishlist([...wishList, drone.id]);
    }
  };

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
          <div className="flex justify-center gap-2 flex-wrap  items-center">
            {category.map((cate) => (
              <span
                key={cate}
                onClick={() => setSelectedCategory(cate)}
                className={`px-[10px] cursor-pointer capitalize max-sm:text-sm py-[1px] rounded-full border-2
                  ${
                    selectedCategory === cate
                      ? "bg-black text-white border-black"
                      : " hover:border-black active:border-black  hover:text-white hover:bg-black "
                  }
                  `}
              >
                {cate}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3  mt-10 p-2 gap-5 overflow-y-scroll">
          {filterDrones.map((drone) => (
            <div
              key={drone.id}
              className="m-auto max-sm:p-3 p-4 rounded-lg bg-[#EFEFF0] flex flex-col"
            >
              <div className="py-5 relative rounded-md bg-white">
                <img className="w-[250px] " src={drone.path} alt="" />
                <span className="absolute max-sm:top-1 max-sm:left-1  top-2 left-2  bg-[#8a8a8a23] p-1 rounded-full">
                  <AiOutlineEye
                    onClick={() => handleSelect(drone)}
                    className=" cursor-pointer"
                    size={20}
                  />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-4 flex-col justify-between py-4">
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`lg:text-[12px] flex items-center justify-start gap-1  ${badgeColor(
                        drone.type
                      )} rounded-full text-[10px] px-2`}
                    >
                      <GoDotFill />
                      {drone.type}
                    </span>
                    {wishList.includes(drone.id) ? (
                      <AiFillHeart
                        onClick={() => toggleWishlist(drone)}
                        className=" cursor-pointer text-red-500"
                        size={18}
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={() => toggleWishlist(drone)}
                        className=" cursor-pointer text-red-500"
                        size={18}
                      />
                    )}
                  </div>

                  <div className="flex flex-col w-full  items-start">
                    <h3 className="text-[#0D0D0D] font-semibold">
                      {drone.name}
                    </h3>
                    <span className="text-[#2a9d8f] font-semibold">
                      ₹{drone.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleViewDetails(drone.id)}
                  className="flex items-center capitalize font-semibold text-[.7rem] lg:text-[.8rem] gap-2  py-2 rounded-lg w-full bg-black text-white  justify-center"
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
