import { createBrowserRouter } from "react-router";
import CatagoriNews from "../Pages/CatagoriNews";
import Home from "../layouts/Home";
import HomePage from "../Pages/HomePage";




 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
        {
            path:"", element: <HomePage></HomePage>
        },
        {
            path : "/catagori/:id",element: <CatagoriNews></CatagoriNews>,
            loader :()=> fetch('/news.json')
        
          }
    ]
    
  },
]);
