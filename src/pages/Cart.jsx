import { useState } from "react";
import Stepper from "../ui/Stepper";
import { useDroneData } from "../context/DroneContext";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import CheckoutCard from "../ui/CheckoutCard";
import ProductTableView from "../ui/ProductTableView";
import ProductMobileView from "../ui/ProductMobileView";

function Cart() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ["Cart", "Address", "Payment"];
  const { currentUser } = useDroneData();

  // Calculate total items in cart
  const totalItemsInCart = currentUser.cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <div className="flex justify-center items-center text-center w-full flex-col">
      <h2 className="font-semibold text-2xl">Shopping Cart</h2>
      <Stepper currentStep={currentStep} complete={complete} steps={steps} />

      {totalItemsInCart === 0 ? (
        <div className="flex justify-center items-center flex-col w-full">
          <p className="mt-4 text-gray-600">
            Your cart is empty. Please add items to your cart first.
          </p>
          <Link
            to={"/shop"}
            className="flex gap-2 items-center justify-center mt-2 bg-blue-700 text-white px-4 py-1 rounded-md"
          >
            Shopping Page <MdOutlineAddShoppingCart />
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-start mt-5 gap-10 max-md:flex-col w-full">
          <div className="flex-1 text-start w-full ">
            <ProductTableView />
            <ProductMobileView />
          </div>
          <div className="border-2 bg-[#F0F1F2] mt-2 flex flex-col items-center justify-start w-full md:w-1/3">
            <CheckoutCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

// {!complete && (
//   <div className="flex  gap-5">
//     <button
//       disabled={currentStep < 2}
//       onClick={() => {
//         setComplete(false);
//         setCurrentStep((prev) => prev - 1);
//       }}
//       className={`btn `}
//     >
//       Prev
//     </button>
//     <button
//       onClick={() => {
//         currentStep === steps.length
//           ? setComplete(true)
//           : setCurrentStep((prev) => prev + 1);
//       }}
//       className={`btn`}
//     >
//       {currentStep === steps.length ? "Finish" : "Next"}
//     </button>
//   </div>
// )}
