import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
        <div className="flex justify-center items-center my-32">
            <span className="loading loading-spinner text-success loading-lg"></span>
        </div>
    );
  };

  if (user) {
    return children;
  };

  return <Navigate to="/signIn" state={location?.pathname} />;
};

export default PrivateRoute;
