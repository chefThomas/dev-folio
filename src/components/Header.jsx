import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

import "../stylesheets/css/main.css";

const Header = (props) => (
  <header className='Header'>
    <Logo />
    <NavBar />
  </header>
);

export default Header;
