import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProductSummaryCard from "./ProductSummaryCard";

function CheckoutCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:w-1/3   justify-start border-[1px]  shadow-sm border-[#666] items-start bg-gray-200 p-4 w-full">
      <h3
        className={`${
          open && " border-b-[1px] pb-1  border-[#888] "
        }  capitalize w-full text-start   font-semibold max-sm:text-sm`}
      >
        order summary
      </h3>

      <div className="w-full mt-2  flex flex-col justify-start">
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-screen" : "max-h-0"
          }`}
        >
          {open && (
            <div className="flex flex-col gap-1 justify-start items-start">
              <div className="flex text-sm  text-gray-500 font-semibold justify-between w-full">
                <span>Cart Subtotal</span>
                <span>₹6500</span>
              </div>
              <div className="flex text-sm  text-gray-500 font-semibold justify-between w-full">
                <span>Shipping</span>
                <span>₹500</span>
              </div>
              <span className=" text-sm font-semibold text-gray-500">
                Flat Rate - Fixed
              </span>

              <div className="w-full border-t-[1px] mt-2 py-2 border-[#888]  flex flex-col">
                <div className="flex text-[15px] text-heading font-semibold justify-between w-full">
                  <span>Order Total</span>
                  <span>₹7000</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => setOpen((open) => !open)}
          className="flex justify-between  pb-1 border-b-[1px] border-[#888] items-center w-full"
        >
          <h5 className=" cursor-pointer text-[12px]  text-gray-500 font-semibold">
            1 item in Cart
          </h5>
          {open ? (
            <IoIosArrowUp className=" text-gray-500 text-sm cursor-pointer " />
          ) : (
            <IoIosArrowDown className="text-gray-500 text-sm  cursor-pointer " />
          )}
        </div>

        <div>
          <ProductSummaryCard />
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
