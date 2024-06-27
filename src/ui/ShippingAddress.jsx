import { Link } from "react-router-dom";

function ShippingAddress() {
  return (
    <div className="flex flex-col  p-5 text-start  justify-start  flex-1">
      <div>
        <h2 className="text-xl font-semibold text-heading">Shipping Address</h2>

        <div className="flex flex-col mt-3 gap-3  border-b-2 pb-4">
          <div className="flex justify-between items-center">
            <label
              htmlFor="email"
              className=" whitespace-nowrap text-sm text-gray-700 font-medium"
            >
              Email Address<span>*</span>
            </label>
            <input
              className="w-[70%] px-2 py-1 border-2 "
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
      <div>2</div>
      <div>3</div>
    </div>
  );
}

export default ShippingAddress;
