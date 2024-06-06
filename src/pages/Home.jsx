import { GiDeliveryDrone } from "react-icons/gi";
import "./Home.css";
import { TbDrone } from "react-icons/tb";

function Home() {
  return (
    <>
      <section className="w-full flex-col flex">
        <div
          id="hero-section"
          className="w-full  bg-contain lg:bg-cover flex justify-center items-center"
        >
          <div className="lg:bg-white bg-black text-white lg:text-black rounded-sm px-2 py-[2rem] flex-col text-center backdrop-blur-sm bg-opacity-80  flex justify-center items-center w-[80%] lg:w-[50%]">
            <GiDeliveryDrone size={25} />
            <h2 className="text-xl font-semibold mt-5">The Spy World</h2>
            <p className="w-[85%] mt-2">
              All handmade with the best PCB material and best-in-class 3D
              printing machines.
            </p>

            <button className="flex items-center hover:translate-y-[-2px]  mt-3 bg-white text-black lg:bg-black lg:text-white px-3 py-2 gap-2 active:translate-y-[1px] shadow-lg  lg:shadow-slate-400">
              Discover Our Collection
              <TbDrone />
            </button>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="flex lg:mt-10 lg:py-4 flex-col justify-start items-center text-center w-full"
      >
        <h2 className="font-semibold text-[1.6rem] lg:text-3xl  mb-3">
          Elevate Your Experience: Drones for Every Need
        </h2>
        <p className=" text-gray-500 text-sm lg:text-[1rem] mb-10 w-[80%] lg:w-[50%]">
          Discover the Sky: Explore Our Wide Range of Drones for both personal
          and industrial use.
        </p>

        <div className="flex justify-center flex-col-reverse lg:flex-row items-center px-5">
          <div className="">
            <h3 className="font-semibold text-xl">
              Drones for Play and Personal Use
            </h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Safe, fun, and easy to fly – perfect for your personal adventures.
            </p>
          </div>

          <div className="p-5 flex justify-center items-center">
            <img className="w-[60%]" src="../../assets/personal.png" alt="" />
          </div>
        </div>

        <div className="flex justify-center flex-col lg:flex-row items-center p-10">
          <div className="p-5 flex justify-center items-center">
            <img className="w-[60%]" src="../../assets/video.png" alt="" />
          </div>

          <div className="">
            <h3 className="font-semibold text-xl">Drones for Videography</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Capture stunning aerial views with our advanced videography
              drones.
            </p>
          </div>
        </div>

        <div className="flex justify-center  flex-col-reverse lg:flex-row items-center px-5">
          <div className="">
            <h3 className="font-semibold text-xl">Drones for Geolocation</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Map the world from above with pinpoint accuracy.
            </p>
          </div>

          <div className="p-5 flex justify-center  items-center">
            <img className="w-[70%]" src="../../assets/geo.png" alt="" />
          </div>
        </div>

        <div className="flex justify-center flex-col lg:flex-row  items-center p-10">
          <div className="p-5 flex justify-center items-center">
            <img
              className="w-[80%]"
              src="../../assets/construction.png"
              alt=""
            />
          </div>

          <div className="">
            <h3 className="font-semibold text-xl">
              Drones for Construction Industry
            </h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Enhance construction efficiency with our high-precision drones
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col-reverse lg:flex-row  items-center px-5">
          <div className="">
            <h3 className="font-semibold text-xl">Drones for Courier</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Deliver packages swiftly and securely with our courier drones.
            </p>
          </div>

          <div className="p-5 flex justify-center items-center">
            <img className="w-[70%]" src="../../assets/courier.png" alt="" />
          </div>
        </div>

        <div className="flex justify-center flex-col lg:flex-row  items-center p-10">
          <div className="p-5 flex justify-center items-center">
            <img className="w-[80%]" src="../../assets/racing.png" alt="" />
          </div>

          <div className="">
            <h3 className="font-semibold text-xl">Drones for Racing</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              From the sky to the race track, our drones breaking records
              everyday
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
