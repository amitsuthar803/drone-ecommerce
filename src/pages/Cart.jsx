import { useState } from "react";
import Stepper from "../ui/Stepper";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDroneData } from "../context/DroneContext";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";

function Cart() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ["Cart", "Address", "Payment"];
  const { currentUser, updateCart, removeFromCart, handleWishlist } =
    useDroneData();

  const isInWishlist = (productId) => {
    return currentUser?.wishlistItems.includes(productId);
  };

  // Calculate total items in cart
  const totalItemsInCart = currentUser.cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <div className="flex  justify-center items-center text-center w-full flex-col">
      <h2 className="font-semibold text-2xl">Shopping Cart</h2>
      <Stepper currentStep={currentStep} complete={complete} steps={steps} />

      {totalItemsInCart === 0 ? (
        <div className="flex justify-center items-center flex-col">
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
        <div className="flex justify-between items-start  mt-5 gap-10 max-sm:flex-col w-full">
          <div className="flex-1 text-start w-full ">
            <table className="table-auto w-full ">
              <thead className="border-b-2 ">
                <tr className="max-sm:text-[13px]  text-gray-400">
                  <th className="py-1 font-sans ">IMAGE</th>
                  <th className="py-1 font-sans ">NAME</th>
                  <th className="py-1 font-sans ">PRICE</th>
                  <th className="py-1 font-sans ">Qty</th>
                  <th className="py-1 font-sans ">TOTAL</th>
                  <th className="py-1 font-sans ">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-center border-b-2">
                {currentUser.cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="flex justify-center py-3 items-center">
                      <img src={item.path} width={100} height={100} alt="" />
                    </td>
                    <td className="font-semibold uppercase">{item.name}</td>
                    <td>₹{item.price}</td>
                    <td className="">
                      <div className="border-2 flex text-gray-500 items-center justify-evenly">
                        <button
                          className=""
                          onClick={() =>
                            updateCart(item.id, "remove", item.qty)
                          }
                        >
                          <FaMinus size={12} />
                        </button>
                        <input
                          value={item.qty}
                          type="numeric"
                          className="font-semibold text-black w-[25px] text-center py-[2px]  "
                        ></input>
                        <button
                          className="items-center"
                          onClick={() =>
                            updateCart(item.id, "add", item.qty + 1)
                          }
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </td>
                    <td>₹{item.price * item.qty}</td>
                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <button
                          className="bg-slate-300 p-1"
                          onClick={() => handleWishlist(item.id)}
                        >
                          {isInWishlist(item.id) ? (
                            <PiHeartStraightFill className="cursor-pointer text-black text-md" />
                          ) : (
                            <PiHeartStraightBold className="cursor-pointer text-black text-md" />
                          )}
                        </button>
                        <button
                          className="bg-slate-300 p-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-2 flex flex-col lg:w-1/3">
            <div>
              <h3 className="uppercase">Apply Discount Code</h3>
              <div>
                <input type="text" />
                <button>APPLY DISCOUNT</button>
                <div>
                  <h3>Estimate Shipping and Tax</h3>
                  <p>Enter your destination to get a shipping estimate.</p>
                  <button>+</button>
                </div>
              </div>
            </div>
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
