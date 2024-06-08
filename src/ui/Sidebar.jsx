import Proptype from "prop-types";
import { RxCross2 } from "react-icons/rx";

function Sidebar({ setShowSidebar, sidebarRef }) {
  return (
    <div
      ref={sidebarRef}
      className="absolute w-[250px] md:hidden right-0 top-0 z-10 bg-white h-[100vh]"
    >
      <button
        className="md:hidden right-3 top-2 absolute"
        onClick={() => setShowSidebar((show) => !show)}
      >
        <RxCross2 size={20} />
      </button>
    </div>
  );
}

Sidebar.propTypes = {
  setShowSidebar: Proptype.func,
  sidebarRef: Proptype.oneOfType([Proptype.func, Proptype.object]),
};

export default Sidebar;
