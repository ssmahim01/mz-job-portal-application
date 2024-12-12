import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            toast.success(`${user.displayName}, Successfully logged in`, {
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
        <div className="w-4/5 mx-auto pb-5">
            <button onClick={handleGoogleSignIn} className="w-full btn btn-info text-base text-white font-bold rounded-full">Sign In with Google</button>
        </div>
    );
};

export default SocialLogin;