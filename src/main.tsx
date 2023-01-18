import * as React from "react";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import DynamicImport from "./DynamicImport";
import "./main.css";

const Slides = React.lazy(() => import("./Slides"));
const StaticImport = React.lazy(() => import("./StaticImport"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <div>🚧 En construction 🚧</div>,
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
        element: (
          <Suspense fallback={null}>
            <Slides />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
