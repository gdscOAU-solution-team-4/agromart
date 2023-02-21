import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import "./index.css";

// router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <h1 className="text-3xl text-center text-red-900 font-bold underline">
//         Hello world!
//       </h1>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
