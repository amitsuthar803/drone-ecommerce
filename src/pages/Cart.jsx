import { useState } from "react";
import Stepper from "../ui/Stepper";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDroneData } from "../context/DroneContext";
import { RxCross2 } from "react-icons/rx";

function Cart() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ["Cart", "Address", "Payment"];
  const { currentUser, updateCart, handleWishlist } = useDroneData();

  const isInWishlist = (productId) => {
    return currentUser?.wishlistItems.includes(productId);
  };

  return (
    <div className="flex  justify-center items-center text-center w-full flex-col">
      <h2 className="font-semibold text-2xl">Shopping Cart</h2>
      <Stepper currentStep={currentStep} complete={complete} steps={steps} />

      <div className="flex justify-between items-start mt-5 gap-10 max-sm:flex-col w-full">
        <div className="flex-1 text-start w-full">
          <table className="table-auto  w-full">
            <thead className=" border-b-2">
              <tr className="max-sm:text-[13px] text-gray-400 ">
                <th className="">IMAGE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>Qty</th>
                <th>TOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className="text-center ">
              {currentUser.cartItems.map((items) => (
                <tr className="" key={items.id}>
                  <td className="flex justify-center py-3 items-center">
                    <img src={items.path} width={100} height={100} alt="" />
                  </td>

                  <td className="">{items.name}</td>

                  <td>{items.price}</td>
                  <td className="">
                    <div className="border-2 flex text-gray-500 items-center justify-evenly">
                      <button
                        className=""
                        onClick={() =>
                          updateCart(items.id, "remove", items.qty)
                        }
                      >
                        <FaMinus size={12} />
                      </button>
                      <input
                        value={items.qty}
                        type="numeric"
                        className="font-semibold text-black w-[25px] text-center py-[2px]  "
                      ></input>
                      <button
                        className="items-center"
                        onClick={() =>
                          updateCart(items.id, "add", items.qty + 1)
                        }
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </td>
                  <td>{items.price * items.qty}</td>
                  <td className="">
                    <div className="flex justify-center items-center gap-2">
                      <button onClick={() => handleWishlist(items.id)}>
                        {isInWishlist(items.id) ? (
                          <AiFillHeart
                            key={0}
                            className=" cursor-pointer lg:text-[18px] text-[18px] text-black"
                          />
                        ) : (
                          <AiOutlineHeart
                            key={0}
                            className=" cursor-pointer lg:text-[18px] text-[18px] text-black-"
                          />
                        )}
                      </button>
                      <button onClick={() => updateCart(items.id)}>
                        <RxCross2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-2 flex flex-col  lg:w-[30%]">
          <div>
            <h3 className=" uppercase">Apply Discount Code</h3>
            <div>
              <input type="text" />
              <button>APPLY DISCOUNT</button>
              <div>
                <h3>estimate shipping and tax</h3>
                <p>enter your destination to get a shipping estimate.</p>
                <button>+</button>

                <div></div>
              </div>
            </div>
            <h4></h4>
          </div>
          <div></div>
        </div>
      </div>
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
