import React from "react";
import { Link } from "react-router-dom";
import PinkExplosionIMG from "../assets/images/explosion-medium.png";

export default function LandingPage() {
  return (
    <div>
      <Link to={"/home"}>
        <img src={PinkExplosionIMG} alt="explosion" />
      </Link>
    </div>
  );
}
