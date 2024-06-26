import { useNavigate } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";

function PaymentPage() {
  const {
    complete,
    currentStep,
    PrevHandler,
    setCurrentStep,
    nextHandler,
    steps,
  } = useDroneData();
  const navigate = useNavigate();

  return (
    <div>
      PaymentPage
      {!complete && (
        <div className="flex  gap-5">
          <button
            disabled={currentStep < 2}
            onClick={() => {
              setCurrentStep(2), PrevHandler(), navigate(-1);
            }}
            className={`btn `}
          >
            Prev
          </button>
          <button
            onClick={() => {
              nextHandler();
            }}
            className={`btn`}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
