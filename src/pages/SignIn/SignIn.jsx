import Lottie from "lottie-react";
import signInLottie from "../../assets/lottie/signIn.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const {signInUser, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signInUser(email, password)
    .then(result => {
        const user = result.user;
        setUser(user);
        toast.success("Sign In Successful", {
          position: "top-center"
         });
         navigate(from);
    })

    .catch(error => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-center"
         });
    })
  };

  return (
    <div className="my-20">
      <div className="flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 lg:gap-8 gap-10 md:mr-10">
        <div className="md:w-full">
          <h1 className="text-center md:text-4xl text-3xl font-bold mb-10">
            Sign In Form
          </h1>
          <div className="card bg-base-200 lg:w-1/2 md:w-4/5 w-full mx-auto shadow-lg">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered md:w-full w-80"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-600 text-lg text-white font-bold rounded-full">
                 Sign In
                </button>
              </div>
            </form>
            <div className="divider w-4/5 -mt-4 mx-auto">Or</div>
          <SocialLogin />
          </div>
        </div>
        <div className="lg:w-96 md:w-80 w-72">
          <Lottie animationData={signInLottie} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
