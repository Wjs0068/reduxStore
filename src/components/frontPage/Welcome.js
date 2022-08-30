import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="whole">
      <div className="welcome-container">
        <h1 className="welcome-container__header-one">
          Welcome to{" "}
          <span className="welcome-container__company">Sweet House</span>
        </h1>
        <button className="welcome-container__explore">Explore</button>
      </div>
    </div>
  );
}

export default Welcome;
