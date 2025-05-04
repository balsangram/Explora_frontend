// src/components/routeProtect/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const userFromStorage = JSON.parse(localStorage.getItem("user"));

  const isAuthenticated =
    loggedIn || (userFromStorage && userFromStorage.loggedIn);

  return isAuthenticated ? (
    <Outlet /> // If authenticated, allow access
  ) : (
    <Navigate to="/auth/authenticate" replace /> // ❗ fixed path
  );
};

export default ProtectedRoute;
