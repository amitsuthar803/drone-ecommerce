import { GiDeliveryDrone } from "react-icons/gi";
import { TbDrone } from "react-icons/tb";
import Personal from "../../assets/personal.png";
import Geolocation from "../../assets/geo.png";
import Courier from "../../assets/courier.png";
import Racing from "../../assets/racing.png";
import Construction from "../../assets/construction.png";
import Videography from "../../assets/video.png";
import { useNavigate } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../ui/variants";

function Home() {
  const navigate = useNavigate();

  const childrenContainerVarients = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const childrenVarients = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <motion.div>
      <motion.section
        variants={childrenContainerVarients}
        initial="hidden"
        animate="show"
        className="w-full flex-col flex"
      >
        <motion.div
          variants={childrenVarients}
          id="hero-section"
          className="w-full  h-dvh    bg-contain lg:bg-cover flex justify-center items-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: "200%",
            }}
            animate={{
              opacity: 0.8,
              y: 0,
            }}
            transition={{
              ease: easeInOut,
              duration: 0.8,
            }}
            className="lg:bg-white lg:opacity-80 bg-black text-white lg:text-black rounded-sm px-2 py-[2rem] flex-col text-center backdrop-blur-sm bg-opacity-80  flex justify-center items-center w-[80%] lg:w-[50%]"
          >
            <motion.span
              animate={{
                x: [0, -40, 40, 0],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 3,
                delay: 1,
              }}
            >
              <GiDeliveryDrone size={25} />
            </motion.span>
            <h2 className="text-xl font-semibold mt-3">The Spy World</h2>
            <p className="w-[85%] mt-2">
              All handmade with the best PCB material and best-in-class 3D
              printing machines.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="flex items-center transition-all  hover:translate-y-[-2px]  mt-3 bg-white text-black lg:bg-black lg:text-white px-3 py-2 gap-2 active:translate-y-[1px] shadow-lg  lg:shadow-slate-400"
            >
              Discover Our Collection
              <TbDrone />
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="products"
        className="flex lg:mt-10 mt-4 lg:py-4 flex-col justify-start items-center text-center w-full"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", 0.1)}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-start items-center w-full"
        >
          <h2 className="font-semibold text-[1.6rem] lg:text-3xl  mb-3">
            Elevate Your Experience: Drones for Every Need
          </h2>
          <p className=" text-gray-500 text-sm lg:text-[1rem] mb-10 w-[80%] lg:w-[50%]">
            Discover the Sky: Explore Our Wide Range of Drones for both personal
            and industrial use.
          </p>
        </motion.div>

        <div className="flex justify-center flex-col-reverse sm:flex-row items-center px-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className=""
          >
            <h3 className="font-semibold text-xl">
              Drones for Play and Personal Use
            </h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Safe, fun, and easy to fly – perfect for your personal adventures.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className="p-5 flex justify-center items-center"
          >
            <img className="w-[60%]" src={Personal} alt="" />
          </motion.div>
        </div>

        <div className="flex justify-center flex-col sm:flex-row items-center p-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className="p-5 flex justify-center items-center"
          >
            <img className="w-[60%]" src={Videography} alt="" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className=""
          >
            <h3 className="font-semibold text-xl">Drones for Videography</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Capture stunning aerial views with our advanced videography
              drones.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center  flex-col-reverse sm:flex-row items-center px-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className=""
          >
            <h3 className="font-semibold text-xl">Drones for Geolocation</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Map the world from above with pinpoint accuracy.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className="p-5 flex justify-center  items-center"
          >
            <img className="w-[70%]" src={Geolocation} alt="" />
          </motion.div>
        </div>

        <div className="flex justify-center flex-col sm:flex-row  items-center p-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className="p-5 flex justify-center items-center"
          >
            <img className="w-[80%]" src={Construction} alt="" />
          </motion.div>

          <motion.div
            className=""
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="font-semibold text-xl">
              Drones for Construction Industry
            </h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Enhance construction efficiency with our high-precision drones
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center flex-col-reverse sm:flex-row  items-center px-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className=""
          >
            <h3 className="font-semibold text-xl">Drones for Courier</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Deliver packages swiftly and securely with our courier drones.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className="p-5 flex justify-center items-center"
          >
            <img className="w-[70%]" src={Courier} alt="" />
          </motion.div>
        </div>

        <div className="flex justify-center flex-col sm:flex-row  items-center p-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className="p-5 flex justify-center items-center"
          >
            <img className="w-[80%]" src={Racing} alt="" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", 0.1)}
            viewport={{ once: false, amount: 0.2 }}
            className=""
          >
            <h3 className="font-semibold text-xl">Drones for Racing</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              From the sky to the race track, our drones breaking records
              everyday
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Home;
