import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Register = () => {
  const {createUser, setUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if(!passwordRegex.test(password)){
           return alert("Password must be at least 6 character, one uppercase and one number");
        };

        createUser(email, password)
        .then(result => {
          const user = result.user;
          setUser(user);
          alert("Successfully Registered");
        })

        .catch(error => {
          const errorMessage = error.message;
          alert(errorMessage);
        })
    };

  return (
    <div className="my-20 min-h-screen">
     <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-8">
     <div className="md:w-full">
        <h1 className="text-center md:text-4xl text-3xl font-bold mb-10">Register Form</h1>
        <div className="card bg-base-200 md:w-1/2 w-11/12 mx-auto shadow-lg">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-secondary text-lg text-white font-bold rounded-full">Register</button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[600px]">
      <Lottie animationData={registerLottie}/>
      </div>
     </div>
    </div>
  );
};

export default Register;
