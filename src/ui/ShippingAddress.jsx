import { Link } from "react-router-dom";
import ProgressBtn from "./ProgressBtn";

function ShippingAddress() {
  return (
    <div className="flex flex-col  p-5 text-start   justify-start  flex-1">
      <div>
        <h2 className="text-xl font-semibold text-heading">Shipping Address</h2>

        <div className="flex flex-col mt-3 gap-3   border-b-2 pb-4">
          <div className="flex justify-between items-center">
            <label
              htmlFor="email"
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
            >
              Email Address<span>*</span>
            </label>
            <input
              className="  max-sm:w-[65%]  md:w-[70%] px-2 py-1 border-2 "
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-[70%] px-2 py-1 border-2 "
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
              htmlFor="zipcode"
            >
              Zip/Postal Code
            </label>
            <input
              className="w-[70%] px-2 py-1 border-2 "
              type="numeric"
              name="zipcode"
              id="zipcode"
            />
          </div>

          <p className=" text-gray-500 text-sm">
            You already have an account with us. Sign in or continue as guest!.
          </p>

          <div className="flex gap-5 items-center justify-start">
            <button className="bg-black py-2 px-5 text-white uppercase text-sm">
              Login
            </button>
            <Link className=" text-blue-500  text-sm  font-semibold">
              Forgot Your Password?
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <form
          className="flex flex-col gap-3"
          action="
        "
        >
          <div className="flex justify-between items-center">
            <label
              htmlFor="firstname"
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
            >
              First Name<span className=" text-red-600">*</span>
            </label>
            <input
              className="w-[70%] px-2 py-1 border-2 "
              type="firstname"
              name="firstname"
              id="firstname"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="lastname"
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
            >
              Last Name<span className=" text-red-600">*</span>
            </label>
            <input
              className="w-[70%] px-2 py-1 border-2 "
              type="lastname"
              name="lastname"
              id="lastname"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="company"
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
            >
              Company
            </label>
            <input
              className="w-[70%] px-2 py-1 border-2 "
              type="company"
              name="company"
              id="company"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="address"
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
            >
              Street Address<span className=" text-red-600">*</span>
            </label>
            <input
              className="w-[70%] px-2 py-1 border-2 "
              type="address"
              name="address"
              id="address"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="country"
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
            >
              Country<span className=" text-red-600">*</span>
            </label>
            <select
              className="w-[70%] px-2 py-1 border-2 "
              name="country"
              id=""
            >
              <option value="India">India</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="country"
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
            >
              State/Province<span className=" text-red-600">*</span>
            </label>
            <select className="w-[70%] px-2 py-1 border-2 " name="state" id="">
              <option selected value="default">
                Please select a region, state or province
              </option>
              <option value="">Rajasthan</option>
              <option value="">Haryana</option>
              <option value="">Karnatak</option>
            </select>
          </div>
        </form>
      </div>
      <div className="flex flex-col border-t-[1px] mt-5 border-[#888]">
        <div className="flex justify-start py-2 max-sm:gap-10  md:gap-20 items-center">
          <input type="checkbox" name="express" id="express" />
          <label htmlFor="express">₹700</label>
          <span>Express</span>
          <span>Express way</span>
        </div>
        <div className="flex justify-start py-2 max-sm:gap-10 border-t-[1px] border-[#888] gap-2 md:gap-20 items-center">
          <input type="checkbox" name="regular" id="regular" />
          <label htmlFor="regular">₹500</label>
          <span>Regular</span>
          <span>Regular way</span>
        </div>
      </div>

      <ProgressBtn />
    </div>
  );
}

export default ShippingAddress;
