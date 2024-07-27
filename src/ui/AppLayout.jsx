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
      return;
    } else {
      setShowSidebar(false);
    }
  };

  const handleScrollOutside = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScrollOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScrollOutside, true);
    };
  });

  return (
    <div className="app-layout flex flex-col m-auto relative">
      <Header setShowSidebar={setShowSidebar} />

      <Sidebar
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
        sidebarRef={sidebarRef}
      />

      <div className="content overflow-y-scroll h-full mt-[60px] flex w-full justify-center m-auto">
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
