import * as React from "react";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import DynamicImport from "./DynamicImport";
import "./main.css";
import Slides from "./Slides";

const StaticImport = React.lazy(() => import("./StaticImport"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <div>TechnoDrinks, 18 janvier 2023</div>,
      },
      {
        path: "static",
        element: (
          <Suspense fallback={null}>
            <StaticImport />
          </Suspense>
        ),
      },
      {
        path: "dynamic",
        element: <DynamicImport />,
      },
      {
        path: "slides",
        element: <Slides />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
