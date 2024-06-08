import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import drone1 from "../../assets/drone1.png";
import drone2 from "../../assets/drone2.png";
import drone3 from "../../assets/drone3.png";
import drone4 from "../../assets/drone4.png";
import drone5 from "../../assets/drone5.png";
import drone6 from "../../assets/drone6.png";
import drone7 from "../../assets/drone7.png";
import drone8 from "../../assets/drone8.png";
import drone9 from "../../assets/drone9.png";
import drone10 from "../../assets/drone10.png";
import drone11 from "../../assets/drone11.png";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const category = [
    "all",
    "fun",
    "agri",
    "industrial",
    "camera",
    "racing",
    "underwater",
    "Li-dar",
  ];

  const droneImages = [
    {
      name: "drone1",
      path: drone1,
      price: 999,
      type: "fun",
    },
    {
      name: "drone2",
      path: drone2,
      price: 999,
      type: "industrial",
    },
    {
      name: "drone3",
      path: drone3,
      price: 999,
      type: "camera",
    },
    {
      name: "drone4",
      path: drone4,
      price: 999,
      type: "camera",
    },
    {
      name: "drone5",
      path: drone5,
      price: 999,
      type: "agri",
    },
    {
      name: "drone6",
      path: drone6,
      price: 999,
      type: "agri",
    },
    {
      name: "drone7",
      path: drone7,
      price: 999,
      type: "underwater",
    },
    {
      name: "drone8",
      path: drone8,
      price: 999,
      type: "racing",
    },
    {
      name: "drone9",
      path: drone9,
      price: 999,
      type: "industrial",
    },
    {
      name: "drone10",
      path: drone10,
      price: 999,
      type: "Li-dar",
    },
    {
      name: "drone11",
      path: drone11,
      price: 999,
      type: "fun",
    },
  ];

  const filterDrones =
    selectedCategory === "all"
      ? droneImages
      : droneImages.filter((drone) => drone.type === selectedCategory);

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
              key={drone.name}
              className="m-auto p-3 rounded-md bg-gray-100 flex flex-col"
            >
              <div className="py-5 rounded-md bg-white">
                <img className="w-[250px] " src={drone.path} alt="" />
              </div>
              <div>
                <h3>{drone.name}</h3>
                <span>Price: {drone.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
