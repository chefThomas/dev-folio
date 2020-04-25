import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink className='NavBar--link' to='/'>
          Projects
        </NavLink>
        <NavLink className='NavBar--link' to='/resume'>
          Resume
        </NavLink>
        <NavLink className='NavBar--link' to='/contact'>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
