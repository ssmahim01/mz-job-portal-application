import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobDetails/jobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import HotJobs from "../pages/Home/HotJobs";
import AddJob from "../AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

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
              path: "/jobs",
              element: <HotJobs />
            },
            {
              path: "/jobs/:id",
              loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
              element: <PrivateRoute><JobDetails /></PrivateRoute>
            },
            {
              path: "/apply/:id",
              element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
              path: "/addJob",
              element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
              path: "/myPostedJobs",
              element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
              path: "/viewApplications/:job_id",
              loader: ({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
              element: <PrivateRoute><ViewApplications /></PrivateRoute>
            },
            {
              path: "/myApplications",
              element: <PrivateRoute><MyApplications /></PrivateRoute>
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