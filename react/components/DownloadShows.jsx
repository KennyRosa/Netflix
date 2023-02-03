import React from "react";
import show from "../assets/images/netflix/show.png";
import "./netflix.css";

function DownloadShows() {
  return (
    <div className="container-tv enjoy-tv-wrap">
      <div className="row">
        <div className="col enjoy-tv-img">
          <img className="bird-box-tv" src={show} alt="" />
        </div>
        <div className="col enjoy-tv">
          <h2>Download your shows to watch offline.</h2>
          <p>Available on all plans except Basic with ads.</p>
        </div>
      </div>
    </div>
  );
}

export default DownloadShows;
