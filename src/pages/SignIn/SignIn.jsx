import Lottie from "lottie-react";
import signInLottie from "../../assets/lottie/signIn.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const SignIn = () => {
    const {signInUser, setUser} = useContext(AuthContext);

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
        alert("Sign In Successful");
    })

    .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
    })
  };

  return (
    <div className="my-20">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-8">
        <div className="md:w-full">
          <h1 className="text-center md:text-4xl text-3xl font-bold mb-10">
            Sign In Form
          </h1>
          <div className="card bg-base-200 md:w-1/2 w-11/12 mx-auto shadow-lg">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-600 text-lg text-white font-bold rounded-full">
                 Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-96">
          <Lottie animationData={signInLottie} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
