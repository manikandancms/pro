import "./style.css";

import ReactDom from "react-dom/client";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductLayout from "./components/ProductLayout.jsx/ProductLayout";
import Value from "./components/Valule_Update/Valueupdate";
import Sample from "./components/Hooks/basichook";
import Comment from "./components/Comment/Comment";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import HeroSection from "./components/hero/HeroSection";
import ImageCompo from "./ImageComponent/ImageCoponents";


import {
  createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import { Children } from "react";
import Error1 from "./components/Error/Error1";
import ComponentA from "./components/DemoComponents/ComponentA";
import UserContext from "./components/Store/UserContext";
import CardProvider from "./components/Store/UseCard";










const App = () => {
  return (

    <>
  <CardProvider>

    <UserContext.Provider value = {{academicYear: "2025-2026", whichFor: " E-Commerce"}}>
      <Header />
      
     <Outlet/>
      

      <Footer />
        </UserContext.Provider>

   </CardProvider>
    

    

    
    </>
  );
};



const Home = () => {
  return (
    <>
      <HeroSection/>
 
      <ProductLayout />
      

    
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },


     {
    path: "/comment",
    element: <Comment />,
  },

     {
    path: "/counter",
    element: <Value/>,
  },


  {
    path: "/products", 
    element: <ProductLayout/>
  },

  {
    path: "/products/:id",
    element: <ProductDetails />
  },
   {
    path: "/image",
    element: <ImageCompo />,
  },

  {
    path: "/props-drilling",
    element: <ComponentA/> 
  }
  
],

  errorElement: <Error1 />,
  },


 
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);  
