function CheckoutCard() {
  return (
    <div className="flex flex-col  justify-start items-start p-4 w-full">
      <h3 className="uppercase  max-sm:text-sm font-semibold">
        Apply Discount Code
      </h3>
      <div className="w-full">
        <div className="flex bg-white my-2 border-2 px-2">
          <input
            type="text"
            className="max-sm:text-[10px] bg-white  py-2  outline-none w-full"
            placeholder="Enter Discount Code"
          />
          <button className=" max-sm:text-[10px]  whitespace-nowrap font-semibold">
            APPLY DISCOUNT
          </button>
        </div>
        <div className="flex justify-between">
          <h3 className="uppercase  max-sm:text-sm font-semibold">
            Estimate Shipping and Tax
          </h3>
          <button className="font-semibold">+</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
