import Stepper from "../ui/Stepper";
import { useDroneData } from "../context/DroneContext";
import { Outlet } from "react-router-dom";

function Cart() {
  const { deleteAllOrders } = useDroneData();

  return (
    <div className="flex justify-start items-center text-center w-full flex-col">
      <h2 className="font-semibold text-2xl">Shopping Cart</h2>
      <Stepper />

      <Outlet />

      <div>
        <button onClick={deleteAllOrders}>Delete All Order</button>
      </div>
    </div>
  );
}

export default Cart;
