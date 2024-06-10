import { useParams } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

function ProductDetail() {
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const { dronesData } = useDroneData();

  const [selectProduct] = dronesData.filter((drone) => drone.id === Number(id));

  return (
    <div className="flex w-full justify-between h-[80vh]  max-sm:flex-col lg:items-center">
      <div className="flex-1 max-sm:rounded-t-[20px]  flex justify-center max-sm:items-center max-sm:bg-gradient-to-r from-red-500 to-orange-500 ">
        <img src={selectProduct.path} alt="" />
      </div>

      <div className=" flex-1 flex p-5 max-sm:bg-gray-100  mt-[-20px] max-sm:rounded-t-[20px] md:items-start justify-start flex-col">
        <h1 className="font-semibold text-[1.2rem] lg:text-[1.5rem]">
          {selectProduct.name}
        </h1>
        <h4 className="mt-2 font-semibold text-[#2a9d8f]">
          ₹{selectProduct.price}
        </h4>

        <div className="flex mt-3 items-center lg:text-md text-sm  gap-5">
          <h4 className="font-semibold ">Quantity:</h4>
          <div className="border-2 lg:py-1">
            <button
              className="lg:px-5 px-2"
              onClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}
            >
              -
            </button>
            <input
              value={count}
              type="numeric"
              className="lg:w-[80px] w-[50px] text-center py-1  border-x-2"
            ></input>
            <button
              className="lg:px-5 px-2"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex mt-5  lg:text-[1rem] text-sm gap-2">
          <h4 className="font-semibold">Description:</h4>
          <p className="text-gray-500">{selectProduct.description}</p>
        </div>

        <button className="bg-black mt-4 gap-2 max-sm:text-center justify-center text-white flex items-center px-4 py-2 rounded-sm">
          <IoCartOutline size={16} />
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
