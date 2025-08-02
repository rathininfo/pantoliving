import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Furniture from './pages/furniture/Furniture.jsx';
import Shop from './pages/shop/Shop.jsx';
import Contact from './pages/contact/Contact.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import Home from './pages/home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
    {
      path:"/",
      element:<Home></Home>
    },

     {
      path:"/furniture",
      element:<Furniture></Furniture>
    },

     {
      path:"/shop",
      element:<Shop></Shop>
    },

     {
      path:"/aboutus",
      element:<AboutUs></AboutUs>
    },

     {
      path:"/contact",
      element:<Contact></Contact>
    }



    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
