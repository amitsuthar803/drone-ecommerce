import { useState } from "react";
import "./Stepper.css";
function Stepper() {
  const steps = ["Cart", "Address", "Payment"];
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div className="flex justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"}`}
          >
            <div className="step">{i + 1}</div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div className="flex  gap-5">
        <button
          disabled={currentStep < 2}
          onClick={() => {
            setCurrentStep((prev) => prev - 1);
          }}
          className={`btn ${currentStep < 2 && "cursor-not-allowed"}`}
        >
          Prev
        </button>
        <button
          disabled={currentStep > 2}
          onClick={() => {
            setCurrentStep((prev) => prev + 1);
          }}
          className={`btn ${currentStep > 2 && "cursor-not-allowed"}`}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Stepper;
