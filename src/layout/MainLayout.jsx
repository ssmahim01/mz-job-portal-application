import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
  const {loading} = useAuth();

  if(loading){
    return (
      <div className="flex justify-center items-center lg:mt-60 mt-40">
          <span className="loading loading-spinner text-success loading-lg"></span>
      </div>
  );
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-220px)] pt-24 pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;