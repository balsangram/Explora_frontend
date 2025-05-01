// src/components/routeProtect/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"; // ✅

const ProtectedRoute = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn); // ✅ from redux

  const userFormStorage = JSON.parse(localStorage.getItem("user"));

  const isAuthenticated =
    loggedIn || (userFormStorage && userFormStorage.loggedIn);

  return isAuthenticated ? (
    <Outlet /> // Render protected children
  ) : (
    <Navigate to="auth/aboutenticate" replace /> // Redirect if not logged in
  );
};

export default ProtectedRoute;
