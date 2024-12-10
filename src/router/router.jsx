import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          errorElement: <h2>Route Not Found</h2>,
          children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
              path: "/signIn",
              element: <SignIn />
            },
          ]
        },      
]);

export default router;