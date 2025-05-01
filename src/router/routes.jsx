// src/routes/index.js

import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Dashboard from "../layouts/dashboard"; // layout
import NotFound from "../page/NotFound";
import Authentication from "../page/Authentication";
import Group from "../page/connection/Group";
import ProtectedRoute from "../components/routeProtect/ProtectedRoute";
import Social from "../page/global/Social";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "user/auth/aboutenticate",
        element: <Authentication />,
      },
      {
        path: "user",
        element: <ProtectedRoute />, // <- Only ProtectedRoute here
        children: [
          {
            element: <Dashboard />, // <-- Dashboard will wrap children
            children: [
              { index: true, element: <div>Welcome to User Dashboard</div> },
              { path: "global/social", element: <Social /> },
              { path: "connection/group", element: <Group /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default routes;
