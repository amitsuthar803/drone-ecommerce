import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Modal from "../ui/Modal";

import { useDroneData } from "../context/DroneContext";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PiHeartBold } from "react-icons/pi";

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
    selectedCategory === "all"
      ? dronesData
      : dronesData.filter((drone) => drone.type === selectedCategory);

  const handleSelect = (drone) => {
    setSelectedDrone(drone);
    setShowModal(true);
    console.log(drone);
  };

  const getBorderStyle = (type) => {
    switch (type) {
      case "underwater":
        return "border-blue-500";
      case "fun":
        return "border-pink-500";
      case "industrial":
        return "border-gray-500";
      case "agri":
        return "border-green-500";
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
              className="m-auto  p-3 rounded-md bg-gray-100 flex flex-col"
            >
              <div className="py-5 relative rounded-md bg-white">
                <img className="w-[250px] " src={drone.path} alt="" />
                <span className="absolute  top-2 left-2  bg-[#8a8a8a23] p-1 rounded-full">
                  <AiOutlineEye
                    onClick={() => handleSelect(drone)}
                    className=" cursor-pointer"
                    size={20}
                  />
                </span>
              </div>
              <div>
                <div className="flex items-center justify-between py-4">
                  <div className="flex flex-col items-start">
                    <h3>{drone.name}</h3>
                    <span>Price: ₹{drone.price}</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <span
                      className={`text-sm border-2  ${getBorderStyle(
                        drone.type
                      )} rounded-full px-2`}
                    >
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
                </div>

                <button
                  onClick={() => handleViewDetails(drone.id)}
                  className="flex items-center text-sm p-1 rounded-sm w-full bg-black text-white  justify-center"
                >
                  <IoCartOutline />
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
