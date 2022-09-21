import React from "react";
import { Link } from "react-router-dom";
import PinkExplosionIMG from "../../assets/images/explosion-medium.png";
import FemtasyLogo from "../../assets/images/femtasy-logo.png";

import "./styles.scss";

export default function LandingPage() {
  return (
    <div className="LandingPage__bg">
      <Link to={"/home"}>
        <div className="LandingPage__logo-container">
          <img
            className="LandingPage__logo-bg"
            src={PinkExplosionIMG}
            alt="explosion"
          />
          <img
            className="LandingPage__logo"
            src={FemtasyLogo}
            alt="explosion"
          />
        </div>
      </Link>
    </div>
  );
}
