import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Authintication/Register";
import Login from "../pages/Authintication/Login";
import JobDetails from "../pages/Home/JobDetails";

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
        path:"/jobs/:id",
        Component:JobDetails,
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
      }
    ],
  },
]);
