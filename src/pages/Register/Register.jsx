import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { toast } from "react-toastify";

const Register = () => {
  const {createUser, updateInfo, setUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const profileInfo = {
          displayName:name,
          photoURL:photo
        };

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if(!passwordRegex.test(password)){
           toast.error("Password must be at least 6 character, one uppercase and one number", {
            position: "top-center"
           });
           return;
        };

        createUser(email, password)
        .then(result => {
          const user = result.user;
          setUser(user);
          updateInfo(profileInfo)
          .then(() => {
            toast.success(`${user.displayName}, Successfully Registered`, {
              position: "top-center"
             });
          })
        })

        .catch(error => {
          const errorMessage = error.message;
          toast.error(errorMessage, {
            position: "top-center"
           });
        })
    };

  return (
    <div className="my-20 min-h-screen">
     <div className="flex md:flex-row flex-col-reverse justify-between items-center md:gap-0 lg:gap-8 gap-10 md:mr-10">
     <div className="md:w-full">
        <h1 className="text-center md:text-4xl text-3xl font-bold mb-10">Register Form</h1>
        <div className="card bg-base-200 lg:w-1/2 md:w-4/5 w-full mx-auto shadow-lg">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered md:w-full w-72"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered md:w-full w-72"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered md:w-full w-72"
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
                className="input input-bordered md:w-full w-72"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary text-lg text-white font-bold rounded-full">Register</button>
            </div>
          </form>
          <div className="divider w-4/5 -mt-4 mx-auto">Or</div>
          <SocialLogin />
        </div>
      </div>
      <div className="lg:w-[600px] md:w-96 w-80 h-full">
      <Lottie animationData={registerLottie}/>
      </div>
     </div>
    </div>
  );
};

export default Register;
