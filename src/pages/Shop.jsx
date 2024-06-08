import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

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
  ];

  const droneImages = [
    {
      name: "drone1",
      path: "/assets/drone1.png",
      price: 999,
      type: "fun",
    },
    {
      name: "drone2",
      path: "/assets/drone2.png",
      price: 999,
      type: "industrial",
    },
    {
      name: "drone3",
      path: "/assets/drone3.png",
      price: 999,
      type: "camera",
    },
    {
      name: "drone4",
      path: "/assets/drone4.png",
      price: 999,
      type: "camera",
    },
    {
      name: "drone5",
      path: "/assets/drone5.png",
      price: 999,
      type: "agri",
    },
    {
      name: "drone6",
      path: "/assets/drone6.png",
      price: 999,
      type: "agri",
    },
    {
      name: "drone7",
      path: "/assets/drone7.png",
      price: 999,
      type: "underwater",
    },
    {
      name: "drone8",
      path: "/assets/drone8.png",
      price: 999,
      type: "racing",
    },
    {
      name: "drone9",
      path: "/assets/drone9.png",
      price: 999,
      type: "industrial",
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
                className={`px-[10px] cursor-pointer capitalize max-sm:text-sm py-[1px] border-2 rounded-full border-gray-300
                  ${
                    selectedCategory === cate
                      ? "bg-black text-white border-black"
                      : " hover:border-black hover:text-white hover:bg-black"
                  }
                  `}
              >
                {cate}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 mt-10 p-2 gap-5 overflow-y-scroll">
          {filterDrones.map((drone) => (
            <div
              key={drone.name}
              className="m-auto p-3 rounded-md bg-gray-100 flex flex-col"
            >
              <div className="py-5 rounded-md bg-white">
                <img className="w-[250px] " src={`${drone.path}`} alt="" />
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
