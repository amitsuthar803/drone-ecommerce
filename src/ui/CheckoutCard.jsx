import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function CheckoutCard({ onClick }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col  justify-start border-[1px] shadow-sm border-[#666] items-start bg-gray-200 p-4 w-full">
        <h3 className="uppercase  max-sm:text-sm font-semibold">
          Apply Discount Code
        </h3>
        <div className="w-full">
          <div className="flex bg-white my-3 border-[#666] border-[1px] px-2">
            <input
              type="text"
              className="max-sm:text-[10px] bg-white placeholder:text-[12px]  py-2 pr-1  outline-none w-full"
              placeholder="Enter Discount Code"
            />
            <button className=" max-sm:text-[10px] text-sm  whitespace-nowrap font-semibold">
              APPLY DISCOUNT
            </button>
          </div>
          <div className="flex justify-between">
            <h3 className="uppercase  max-sm:text-sm font-semibold">
              Estimate Shipping and Tax
            </h3>
            <button
              className="font-semibold"
              onClick={() => setOpen((open) => !open)}
            >
              {open ? <FaMinus size={12} /> : <FaPlus size={12} />}
            </button>
          </div>
          <div className="flex flex-col justify-start items-center">
            <h5 className=" text-[12px] text-gray-500">
              Enter your destination to get a shipping estimate.
            </h5>
            {open && (
              <div className="w-full">
                <div className="flex justify-start mt-4 items-center w-full">
                  <label htmlFor="country" className=" text-sm">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    className="w-[60%]  border-[#666] border-[1px] bg-white p-1 text-sm ml-auto"
                    id="country"
                  >
                    <option value="usa">United State</option>
                    <option value="india" selected>
                      India
                    </option>
                    <option value="uae">UAE</option>
                  </select>
                </div>
                <div className="flex justify-start mt-4 items-center w-full">
                  <label htmlFor="state" className=" text-sm">
                    State/Province <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="state"
                    className="w-[60%]  border-[#666] border-[1px] bg-white p-1 text-sm ml-auto"
                    id="state"
                  >
                    <option value="">Rajasthan</option>
                    <option value="">Haryana</option>
                    <option value="">Gujrat</option>
                  </select>
                </div>
                <div className="flex justify-start mt-4 items-center w-full">
                  <label htmlFor="postal" className=" text-sm">
                    Zip/Postal <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="numeric"
                    placeholder="Ex: 327022"
                    className="w-[60%]  border-[#666] border-[1px] bg-white p-1 text-sm ml-auto"
                    id="postal"
                  ></input>
                </div>

                <div className="flex flex-col mt-3  gap-2 justify-start items-start">
                  <div className="flex flex-col gap-1  justify-start items-start">
                    <h5 className="font-semibold ">Flat Rate</h5>
                    <span className="flex gap-2 text-[12px] text-black font-medium">
                      <input
                        type="checkbox"
                        className=""
                        checked
                        name="flatrate"
                        id=""
                      />
                      <p>Fixed 500₹</p>
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 justify-start items-start">
                    <h5 className="font-semibold">Express Way</h5>
                    <span className="flex gap-2 text-[12px] text-black font-medium">
                      <input type="checkbox" name="express" id="" />
                      <p>Courier Partner Charges 700₹</p>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col mt-4  justify-start border-[1px] shadow-sm border-[#666] items-start bg-gray-200 p-4 w-full">
          <div className="flex pb-2 flex-col border-b-[1px] border-[#888] w-full">
            <div className="flex justify-between text-sm font-semibold">
              <h5>Subtotal</h5>
              <h4>1000₹</h4>
            </div>
            <div className="flex text-[12px] text-gray-500 justify-between font-semibold">
              <h6>Tax</h6>
              <h6>00.00₹</h6>
            </div>
            <div className="flex text-[16px] justify-between font-semibold">
              <h3>Order Total</h3>
              <h3>1000.00₹</h3>
            </div>
          </div>
        </div>
        <button onClick={onClick} className="bg-black py-1 w-full text-white">
          Procced to Checkout
        </button>
      </div>
    </>
  );
}

export default CheckoutCard;
