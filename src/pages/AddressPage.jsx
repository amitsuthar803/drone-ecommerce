import { useNavigate } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";
import OrderSummary from "../ui/OrderSummary";

function AddressPage() {
  const { complete, currentStep, PrevHandler, nextHandler, steps } =
    useDroneData();

  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="flex justify-between items-start mt-5 gap-10 max-md:flex-col w-full">
        <div className="flex-1 text-start w-full ">
          {!complete && (
            <div className="flex  gap-5">
              <button
                disabled={currentStep < 2}
                onClick={() => {
                  PrevHandler(), navigate("/cart");
                }}
                className={`btn `}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  nextHandler(), navigate("/cart/payment");
                }}
                className={`btn`}
              >
                {currentStep === steps.length ? "Finish" : "Next"}
              </button>
            </div>
          )}
          <div className=" flex mt-2 justify-between items-center"></div>
        </div>
        <div className="mt-2 flex flex-col items-center justify-start w-full md:w-1/3">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default AddressPage;
