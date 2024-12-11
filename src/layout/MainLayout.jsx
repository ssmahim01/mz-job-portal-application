import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-300px)] pt-24 pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;