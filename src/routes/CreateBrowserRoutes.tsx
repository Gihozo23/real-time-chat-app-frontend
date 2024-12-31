import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Layout } from "../components/Layout";
import Home from "../components/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    // ],
  },
]);
