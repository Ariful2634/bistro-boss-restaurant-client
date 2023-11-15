import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Menus from "../Pages/Menus/Menus";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dash/Cart"


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menus></Menus>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        }
      ]
    }
   
  ]);