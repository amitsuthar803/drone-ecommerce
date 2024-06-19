import { FaMinus, FaPlus } from "react-icons/fa";
import { useDroneData } from "../context/DroneContext";
import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

function ProductTableView() {
  const { currentUser, updateCart, removeFromCart, handleWishlist } =
    useDroneData();

  const isInWishlist = (productId) => {
    return currentUser?.wishlistItems.includes(productId);
  };

  return (
    <table className="table-auto w-full max-md:hidden ">
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
              <img
                src={item.path}
                className=" max-sm:w-[70px] w-[100px] "
                alt=""
              />
            </td>
            <td className="font-semibold max-sm:text-start max-sm:pl-5 uppercase max-sm:text-sm">
              {item.name}
            </td>
            <td className=" max-sm:text-sm">₹{item.price}</td>
            <td className="">
              <div className="border-2 flex text-gray-500 items-center justify-evenly">
                <button
                  className=""
                  onClick={() => updateCart(item.id, "remove", item.qty)}
                >
                  <FaMinus size={12} />
                </button>
                <input
                  value={item.qty}
                  type="numeric"
                  className="font-semibold text-black w-[25px] max-sm:text-sm text-center py-[2px]  "
                ></input>
                <button
                  className="items-center"
                  onClick={() => updateCart(item.id, "add", item.qty + 1)}
                >
                  <FaPlus size={12} />
                </button>
              </div>
            </td>
            <td className=" max-sm:text-sm">₹{item.price * item.qty}</td>
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
  );
}

export default ProductTableView;
