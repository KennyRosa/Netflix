import React from "react";
import show from "../assets/images/netflix/show.png";
import "./netflix.css";

function WatchEverywhere() {
  return (
    <div className="container-tv enjoy-tv-wrap">
      <div className="row">
        <div className="col enjoy-tv-img">
          <img className="bird-box-tv" src={show} alt="" />
        </div>
        <div className="col enjoy-tv">
          <h2>Watch Everywhere.</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatchEverywhere;
