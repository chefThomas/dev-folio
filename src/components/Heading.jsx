import React from "react";
import "../stylesheets/css/main.css";

const Heading = ({ level, text }) => {
  let heading = "";
  switch (level) {
    case 1:
      heading = <h1 className='Heading Heading--1'>{text}</h1>;
      break;
    case 2:
      heading = <h2 className='Heading Heading--2'>{text}</h2>;
      break;
    case 3:
      heading = <h3 className='Heading Heading--3'>{text}</h3>;
      break;
    default:
      break;
  }
  return heading;
};

export default Heading;
