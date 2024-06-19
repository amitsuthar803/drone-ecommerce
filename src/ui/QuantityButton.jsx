/* eslint-disable react/prop-types */
import { useDroneData } from "../context/DroneContext";
function QuantityButton({ item, className }) {
  const { updateCart } = useDroneData();

  return (
    <div
      className={`${className}  max-sm:w-[70px]  max-sm:h-[25px] w-[80px] shadow-sm py-1 flex items-center justify-center rounded-sm bg-slate-200`}
    >
      <span
        onClick={() => updateCart(item.id, "remove", item.qty)}
        className=" cursor-pointer w-full text-center font-semibold"
      >
        -
      </span>

      <span className=" w-full border-l-2 border-r-2   border-[rgba(0,0,0,0.2)] text-center font-semibold max-sm:text-[12px] text-[16px]">
        {item.qty}
      </span>

      <span
        onClick={() => updateCart(item.id, "add", item.qty + 1)}
        className=" cursor-pointer w-full text-center font-semibold"
      >
        +
      </span>
    </div>
  );
}

export default QuantityButton;
