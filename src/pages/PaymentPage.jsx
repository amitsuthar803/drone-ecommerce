import OrderSummary from "../ui/OrderSummary";
import PaymentMethod from "../ui/PaymentMethod";

function PaymentPage() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-start mt-5 m-auto gap-10 max-md:flex-col w-full">
          <PaymentMethod />
          <OrderSummary />
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
