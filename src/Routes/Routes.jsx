import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Checkout from "../Pages/Checkout/Checkout";
import BookingOrder from "../Pages/BookingOrder/BookingOrder";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/checkout/:id",
        element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
        loader: ({ params }) =>
          fetch(`https://car-fixer-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookingOrder",
        element: (
          <PrivetRoute>
            <BookingOrder></BookingOrder>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
