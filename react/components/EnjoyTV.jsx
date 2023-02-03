import React from "react";
import tv from "../assets/images/netflix/tv.png";
import "./netflix.css";

function EnjoyTV() {
  return (
    <div className="container-tv">
      <div className="row">
        <div className="col enjoy-tv">
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="col enjoy-tv-img">
          <img className="bird-box-tv" src={tv} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EnjoyTV;
