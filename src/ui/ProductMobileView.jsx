import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";
import { useDroneData } from "../context/DroneContext";
import { RxCross2 } from "react-icons/rx";
import QuantityButton from "./QuantityButton";

function ProductMobileView() {
  const { currentUser, handleWishlist, removeFromCart, updateCart } =
    useDroneData();

  const isInWishlist = (productId) => {
    return currentUser?.wishlistItems.includes(productId);
  };

  return (
    <div className="bg-[#feffff] p-3 shadow-sm md:hidden flex flex-col  gap-5">
      {currentUser.cartItems.map((item) => (
        <div key={item.id} className="flex justify-start gap-5">
          <img
            src={item.path}
            className="bg-gray-100 p-2 rounded-lg w-[125px]"
            alt=""
          />

          <div className="w-full">
            <h3 className=" font-semibold">{item.name}</h3>
            <span>₹{item.price}</span>
            <div className="flex justify-between mt-2">
              <QuantityButton item={item} className={``} />

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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductMobileView;
