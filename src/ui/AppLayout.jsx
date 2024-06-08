import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef();

  const handleClickOutside = (event) => {
    if (sidebarRef.current && sidebarRef.current.contains(event.target)) {
      console.log("click inside");
    } else {
      console.log("click outiside");
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="app-layout bg-white flex flex-col m-auto relative h-[100vh]">
      <Header setShowSidebar={setShowSidebar} />
      {showSidebar && (
        <Sidebar setShowSidebar={setShowSidebar} sidebarRef={sidebarRef} />
      )}

      <div className="content overflow-y-scroll h-full flex w-full justify-center m-auto">
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
