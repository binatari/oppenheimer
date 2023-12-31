import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles.css";
import Loader from "./Loader";
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

// studio.extend(extension);
// studio.initialize();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loader/>}>
    <RouterProvider router={router} />
  </Suspense>
);
