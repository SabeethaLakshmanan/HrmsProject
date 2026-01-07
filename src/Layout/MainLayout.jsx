import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Navbar from "../components/Navbar/Navbar"
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import { useSidebar } from "../Context/SidebarContext.js";

const MainLayout = () => {
  const { collapsed, collapseSidebar, isMobile } = useSidebar();

  const showOverlay = isMobile && !collapsed;

  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <Navbar />

      <div className="d-flex flex-grow-1 position-relative">
        <Sidebar />

        {showOverlay && (
          <div
            onClick={collapseSidebar}
            style={{
              position: "fixed",
              inset: 0,
              background: "transparent",
              zIndex: 998,
            }}
          />
        )}
        <div
          className={`flex-grow-1 outlet-wrapper ${
            isMobile ? "mobile-offset" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
