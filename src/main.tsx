import * as React from "react";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import "./main.css";

const Dependencies = React.lazy(() => import("./Dependencies"));
const Slides = React.lazy(() => import("./Slides"));

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
        path: "deps",
        element: (
          <Suspense fallback={null}>
            <Dependencies />
          </Suspense>
        ),
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
