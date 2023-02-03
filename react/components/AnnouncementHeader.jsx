import React from "react";
import "./netflix.css";

function AnnouncementHeader() {
  return (
    <React.Fragment>
      <div className="netflix-header">
        <span className="badge">New!</span>
        Plans now start at
        <span className="bold-price"> $6.99.</span>
        <a href="/learn-more" className="link-primary">
          Learn More
        </a>
      </div>
    </React.Fragment>
  );
}

export default AnnouncementHeader;
