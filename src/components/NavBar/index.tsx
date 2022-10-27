import React from "react";
import { useLocation } from "react-router-dom";

import "./styles.scss";

interface INavBarProps {
  title: string;
  link: string;
}

const NavBarItem = ({ title, link }: INavBarProps) => {
  return (
    <div className="NavBarItem">
      <a href={link}>
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default function NavBar() {
  const location = useLocation();

  return (
    <div className="NavBar">
      {location.pathname !== "/" && <NavBarItem title="Start" link="/" />}
      {location.pathname !== "/home" && (
        <NavBarItem title="Home" link="/home" />
      )}
    </div>
  );
}
