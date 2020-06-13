import React from "react";

import DeveloperCard from "./DeveloperCard";

import "../stylesheets/css/main.css";

const Header = (props) => (
  <>
    <header className={`Header ${props.styles}`}>
      <div className='Header__mosaic'>
        <div className='Header__mosaic__1'></div>
        <div className='Header__mosaic__2'></div>
        <div className='Mosaic__container'>
          {" "}
          <span className='Header__mosaic__3'></span>
          <span className='Header__mosaic__4'></span>
        </div>
      </div>
      {/* <DeveloperCard style='' /> */}
    </header>
  </>
);

export default Header;
