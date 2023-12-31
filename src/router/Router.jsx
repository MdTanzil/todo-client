import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoardLayout from "../layouts/DashBoardLayout";
import DashBoardHome from "../pages/DashBoard/DashBoardHome";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{ path: "/", element: <Home></Home> }],
  },
  {
    path: "dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children:[{
      path: '',
      element:<PrivateRoute> <DashBoardHome></DashBoardHome></PrivateRoute>
    },]
  },

  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
