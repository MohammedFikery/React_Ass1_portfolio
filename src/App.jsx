import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../componend/Layout";
import Home from "./../componend/Home";
import About from "../componend/About";
import Contact from './../componend/Contact';
import Portfolio from './../componend/Portfolio';

const router = createBrowserRouter([
  {
    path: "", element: <Layout/>, children: [
      { index:true, element: <Home/> },
      { path: "Home", element: <Home/> },
      { path: "About", element: <About/> },
      { path: "Contact", element: <Contact/> },
      { path: "Portfolio", element: <Portfolio/> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
