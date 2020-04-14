import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
};

export default NavBar;
