import React from "react";
import children from "../assets/images/netflix/children.png";
import "./netflix.css";

function CreateChildrenProfile() {
  return (
    <div className="container-tv enjoy-tv-wrap">
      <div className="row">
        <div className="col enjoy-tv">
          <h2>Create profiles for kids.</h2>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <div className="col enjoy-tv-img">
          <img className="bird-box-tv" src={children} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CreateChildrenProfile;
