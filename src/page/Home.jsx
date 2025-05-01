import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Link to="user/auth/aboutenticate">login</Link>
    </div>
  );
}

export default Home;
