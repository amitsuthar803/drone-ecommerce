import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDroneData } from "../context/DroneContext";

function ProductMobileView() {
  const [openItemId, setOpenItemId] = useState(null);

  const { currentUser } = useDroneData();

  const toggleDetails = (productId) => {
    setOpenItemId((prevOpenItemId) =>
      prevOpenItemId === productId ? null : productId
    );
  };

  return (
    <div className="mt-4 shadow-sm flex flex-col gap-4">
      {currentUser.cartItems.map((item) => (
        <div key={item.id} className="flex flex-col justify-start gap-3">
          <div className="flex gap-2 justify-start items-start">
            <img
              src={item.path}
              className="bg-gray-100 p-2 rounded-lg w-[100px]"
              alt=""
            />

            <div className="w-full gap-1  items-start text-start justify-start flex flex-col">
              <div className="flex  justify-between w-full">
                <span className=" text-heading font-semibold text-[15px] max-sm:text-sm">
                  {item.name}
                </span>
                <span className=" font-semibold text-gray-500">
                  ₹{item.price}
                </span>
              </div>

              <div className="text-[12px] text-heading font-semibold flex gap-1  max-sm:text-sm">
                <span className=" text-gray-400">QTY:</span>
                {item.qty}
              </div>
              <span
                onClick={() => toggleDetails(item.id)}
                className="flex uppercase max-sm:text-[12px] text-[13px] font-medium  text-gray-500 cursor-pointer justify-start gap-2 items-center"
              >
                view details
                {openItemId === item.id ? (
                  <IoIosArrowUp className="cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="cursor-pointer " />
                )}
              </span>
            </div>
          </div>
          {openItemId === item.id && (
            <div className="text-xs border-[1px] p-2  rounded-lg border-[#999]  text-start text-gray-500">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductMobileView;
