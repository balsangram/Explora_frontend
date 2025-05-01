import React, { useState } from "react";
import LoginAuth from "./Auth/LoginAuth";
import RegisterAuth from "./Auth/RegisterAuth";

function Authentication() {
  const [exist, setExist] = useState(true);

  return (
    <div>
      {exist ? (
        <LoginAuth setExist={setExist} />
      ) : (
        <RegisterAuth setExist={setExist} />
      )}
    </div>
  );
}

export default Authentication;
