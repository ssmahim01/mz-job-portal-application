import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import jobLogo from "/src/assets/job-logo.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const routes = (
    <>
      <li className="*:font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="*:font-bold">
        <NavLink to="/jobs">All Jobs</NavLink>
      </li>
      <li className="*:font-bold">
        <NavLink to="/myApplications">My Applications</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 z-10 shadow-md fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="border border-gray-300 btn btn-ghost lg:hidden shadow-md mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {routes}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img
            className="w-12 h-12"
            src={jobLogo}
            alt="Logo of MZ Job Portal"
          />
          <h2 className="md:block hidden text-xl font-bold">MZ Job Portal</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{routes}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              onClick={() => {
                signOutUser();
                toast.success("Log Out Successful", {
                  position: "top-center"
                 });
              }}
              className="btn btn-error text-white font-bold rounded-none"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="underline text-indigo-600 font-semibold"
            >
              Register
            </Link>
            <Link to="/signIn" className="ml-4">
              <button className="btn bg-purple-600 text-white font-bold">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
