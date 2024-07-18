import { useNavigate } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";
import RazorpayComponent from "./RazorpayComponent";

function PaymentMethod() {
  const { complete, currentStep, PrevHandler, setCurrentStep } = useDroneData();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col  text-start justify-start flex-1">
      <h2 className="text-xl font-semibold text-heading">Payment Method</h2>
      <span>Check / Money order</span>
      <div className="mt-3">
        <div className="mb-2 ">
          <input type="checkbox" name="billing" id="" />
          <label className="ml-2" htmlFor="billing">
            My Billing and Shipping address are the same
          </label>
        </div>
        <div className="flex flex-col ml-5">
          <span>Area</span>
          <span>Street</span>
          <span>District/State/Pincode</span>
          <span>Mobile Number</span>
        </div>
      </div>

      {!complete && (
        <div className="flex justify-between items-end mt-5  gap-5">
          <button
            className="bg-black py-2 px-5 text-white uppercase text-sm"
            disabled={currentStep < 2}
            onClick={() => {
              setCurrentStep(2), PrevHandler(), navigate(-1);
            }}
          >
            Prev
          </button>

          <RazorpayComponent />
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;
