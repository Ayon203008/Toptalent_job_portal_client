import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Authintication/Register";
import Login from "../pages/Authintication/Login";
import JobDetails from "../pages/Home/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path:'jobApply/:id',
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>

      },
      {
        path:'myApplications',
        element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path:"addJob",
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      }
    ],
  },
]);































