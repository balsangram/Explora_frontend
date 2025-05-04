// src/routes/index.js

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../page/NotFound";
import Authentication from "../page/Authentication";
import Group from "../page/connection/Group";
import ProtectedRoute from "../components/routeProtect/ProtectedRoute";
import Social from "../page/global/Social";
import Profile from "../page/profile/Profile";
import SearchPage from "../page/search/SearchPage";
import Forgotten from "../page/Auth/Forgotten";
import Map from "../page/map/Map";

const routes = createBrowserRouter([
  // Public auth routes
  {
    path: "/auth",
    children: [
      { path: "forgot_password", element: <Forgotten /> },
      { path: "authenticate", element: <Authentication /> },
    ],
  },

  // Protected routes
  {
    path: "/",
    element: <ProtectedRoute />, // handles auth logic
    errorElement: <NotFound />, // handles 404 inside protected routes
    children: [
      {
        path: "/", // Root path
        element: <App />, // App layout with <Outlet />
        children: [
          { index: true, element: <Social /> }, // Home (/)
          { path: "connection/group", element: <Group /> }, // /connection/group
          { path: "profile", element: <Profile /> }, // /profile
          { path: "search", element: <SearchPage /> }, // /search
          { path: "map", element: <Map /> }, // /map
        ],
      },
    ],
  },

  // Fallback for unmatched public routes
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
