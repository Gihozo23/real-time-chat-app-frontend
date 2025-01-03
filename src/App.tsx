import React, { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/CreateBrowserRoutes";

function App(): ReactElement {
  return <RouterProvider router={router} />;
}

export default App;
