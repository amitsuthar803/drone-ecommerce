import OrderSummary from "../ui/OrderSummary";
import ShippingAddress from "../ui/ShippingAddress";

function AddressPage() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-start mt-5 m-auto gap-10 max-md:flex-col w-full">
        <ShippingAddress />
        <OrderSummary />
      </div>
    </div>
  );
}

export default AddressPage;
