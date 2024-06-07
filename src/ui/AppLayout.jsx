import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  
  return (
    <div className="app-layout bg-white flex flex-col m-auto relative h-[100vh]">
      <Header />
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}

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
