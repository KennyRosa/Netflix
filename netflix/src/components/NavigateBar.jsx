import React from "react";
import "./netflix.css";
import logo from "../assets/images/netflix/logo.png";
import { useNavigate } from "react-router-dom";

function NavigateBar() {
  const navigate = useNavigate();

  const navigateSignIn = () => {
    navigate("/netflix/sign-in");
  };

  return (
    <React.Fragment>
      <div className="header-image">
        <nav>
          <img src={logo} className="netflix-logo" alt="" />
          <div>
            <button className="language-btn">English</button>
            <button onClick={navigateSignIn}>Sign In</button>
          </div>
        </nav>
        <div className="header-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <small>
            Ready to watch? Enter your email to create or restart your
            membership.
          </small>
          <form className="netflix-email">
            <input type="email" placeholder="Email Address" />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavigateBar;
