import Proptype from "prop-types";
import { useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDroneData } from "../context/DroneContext";

function Modal({ className, setShowModal }) {
  const { selectedDrone } = useDroneData();

  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <div ref={modalRef} onClick={closeModal} className={className}>
      <div className=" bg-white flex relative justify-center flex-col p-5 items-center rounded-lg w-[80%] lg:w-[60%] ">
        <IoCloseSharp
          onClick={() => setShowModal(false)}
          size={30}
          className=" cursor-pointer absolute top-2 right-2"
        />

        <img src={selectedDrone.imageUrl} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  className: Proptype.string,
  setShowModal: Proptype.func,
};

export default Modal;
