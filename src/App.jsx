import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <>
      <div className="dashboard">
        {/* <Heading /> */}
        <div className="dashboard-main">
          <Sidebar />
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
