import { createBrowserRouter } from "react-router";
import CatagoriNews from "../Pages/CatagoriNews";
import Home from "../layouts/Home";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";




 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
        {path:"", element: <HomePage></HomePage>},
        {
            path : "/catagori/:id",element: <CatagoriNews></CatagoriNews>,
            loader :()=> fetch('/news.json')
          }
    ]
    
  },
  {
    path: '/auth',
    element :<AuthLayout></AuthLayout>,
    children:[
      {
      path: '/auth/login',
      element: <Login></Login>
      },
      {
        path: '/auth/register',
        element:<Register></Register>
      }

    ]



  }
]);
