import { useState } from "react";
import Stepper from "../ui/Stepper";
import { useDroneData } from "../context/DroneContext";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center text-center w-full flex-col">
      <h2 className="font-semibold text-2xl">Shopping Cart</h2>
      <Stepper currentStep={currentStep} complete={complete} steps={steps} />

      <Outlet />
      <button onClick={() => navigate(-1)}>Back </button>
    </div>
  );
}

export default Cart;
