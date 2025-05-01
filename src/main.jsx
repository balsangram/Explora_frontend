import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes";
import store from "./store/store";
import { Provider } from "react-redux";
// import Loader from "./components/Loader";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    {/* <Suspense fallback={<Loader />}> */}
    <RouterProvider router={routes} />
    {/* </Suspense> */}
  </Provider>
  // </StrictMode>
);
