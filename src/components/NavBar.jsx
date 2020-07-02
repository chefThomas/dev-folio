import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ styles }) => {
  return (
    <nav className={`NavBar ${styles}`}>
      <div className='NavBar--link-container'>
        <NavLink exact className='NavBar--link' to='/'>
          <button className='NavBar--link-button-outer'>
            <div className='NavBar--link-button-inner'></div>
          </button>{" "}
          projects
        </NavLink>
      </div>
      <div className='NavBar--link-container'>
        <NavLink exact className='NavBar--link' to='/resume'>
          <button className='NavBar--link-button-outer'>
            <div className='NavBar--link-button-inner'></div>
          </button>
          resume
        </NavLink>
      </div>
      <div className='NavBar--link-container'>
        <NavLink exact className='NavBar--link' to='/contact'>
          {" "}
          <button className='NavBar--link-button-outer'>
            {" "}
            <div className='NavBar--link-button-inner'></div>
          </button>
          contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
