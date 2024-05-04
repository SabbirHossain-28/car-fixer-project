import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        }
      ]
    },
  ]);