import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginAuth from "./Auth/LoginAuth";
import RegisterAuth from "./Auth/RegisterAuth";

function Authentication() {
  const location = useLocation();
  const [exist, setExist] = useState(true);

  useEffect(() => {
    if (location.state?.login === false) {
      setExist(false); // Show Register page
    } else if (location.state?.login === true) {
      setExist(true); // Show Login page
    }
  }, [location.state]);

  return (
    <div className="authentication">
      {exist ? (
        <LoginAuth setExist={setExist} />
      ) : (
        <RegisterAuth setExist={setExist} />
      )}
    </div>
  );
}

export default Authentication;
