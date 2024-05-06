import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Checkout from "../Pages/Checkout/Checkout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"/signup",
          element: <SignUp></SignUp>
        },
        {
          path:"/signin",
          element:<SignIn></SignIn>
        },
        {
          path:"/checkout/:id",
          element:<Checkout></Checkout>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);