import Stepper from "../ui/Stepper";

function Cart() {
  return (
    <div className="flex  justify-center items-center text-center w-full flex-col">
      <h2 className="font-semibold text-2xl">Shopping Cart</h2>
      <Stepper />
    </div>
  );
}

export default Cart;
