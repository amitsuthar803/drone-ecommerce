import { GiDeliveryDrone } from "react-icons/gi";
import "./Home.css";
import { TbDrone } from "react-icons/tb";

function Home() {
  return (
    <>
      <section className="w-full flex-col flex">
        <div
          id="hero-section"
          className="w-full flex justify-center items-center bg-slate-500"
        >
          <div className="bg-white rounded-sm px-2 py-[2rem] flex-col text-center backdrop-blur-sm bg-opacity-80  flex justify-center items-center w-[50%]">
            <GiDeliveryDrone size={25} />
            <h2 className="text-xl font-semibold mt-5">The Spy Drone</h2>
            <p className="w-[85%] mt-2">
              All handmade with best pcb material and best in class 3d printing
              machines.
            </p>

            <button className="flex items-center hover:translate-y-[-2px]  mt-3 bg-black text-white px-3 py-2 gap-2 active:translate-y-[1px] shadow-lg shadow-slate-400">
              Discover Our Collection
              <TbDrone />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
