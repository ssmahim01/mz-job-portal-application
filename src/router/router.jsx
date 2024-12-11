import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobDetails/jobDetails";
import PrivateRoute from "./PrivateRoute";

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
              path: "/jobs/:id",
              loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
              element: <PrivateRoute><JobDetails /></PrivateRoute>
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