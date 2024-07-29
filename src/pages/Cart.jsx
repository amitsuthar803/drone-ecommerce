import Stepper from "../ui/Stepper";
import { useDroneData } from "../context/DroneContext";
import { Outlet } from "react-router-dom";

function Cart() {
  // Calculate total items in cart
  // const totalItemsInCart = currentUser?.cartItems.reduce(
  //   (total, item) => total + item.qty,
  //   0
  // );

  return (
    <div className="flex justify-start items-center text-center w-full flex-col">
      <h2 className="font-semibold text-2xl">Shopping Cart</h2>
      <Stepper />

      <Outlet />
    </div>
  );
}

export default Cart;
