import { useNavigate } from "react-router-dom";
import { useDroneData } from "../context/DroneContext";

function ProgressBtn() {
  const { complete, currentStep, PrevHandler, nextHandler, steps } =
    useDroneData();

  const navigate = useNavigate();

  return (
    <div className="">
      {!complete && (
        <div className="flex gap-5 justify-between">
          <button
            className="bg-black py-2 px-5 text-white uppercase text-sm"
            disabled={currentStep < 2}
            onClick={() => {
              PrevHandler(), navigate("/cart");
            }}
          >
            Prev
          </button>
          <button
            className="bg-black py-2 px-5 text-white uppercase text-sm"
            onClick={() => {
              nextHandler(), navigate("/cart/payment");
            }}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
      <div className=" flex mt-2 justify-between items-center"></div>
    </div>
  );
}

export default ProgressBtn;
