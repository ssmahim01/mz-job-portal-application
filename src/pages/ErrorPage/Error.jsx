import Lottie from "lottie-react";
import errorBG from "../../assets/lottie/error.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:my-20 my-5 gap-5">
      <div className="w-96">
      <Lottie animationData={errorBG} />
      </div>

      <h2 className="text-3xl text-rose-600 font-bold">Page Not Found: 404</h2>

      <Link to="/">
        <button className="btn btn-outline hover:bg-emerald-500 hover:border-none rounded-full shadow-md shadow-emerald-200 border border-gray-300 text-lg font-bold px-8">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
