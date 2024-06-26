/* eslint-disable react/prop-types */
import { useDroneData } from "../context/DroneContext";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";

function Stepper() {
  const { currentStep, complete, steps } = useDroneData();
  return (
    <>
      <div className="flex mt-3 justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500 max-sm:text-sm">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stepper;
