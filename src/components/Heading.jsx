import React from "react";

const Heading = (props) => {
  let heading = "";
  switch (props.level) {
    case 1:
      heading = (
        <h1 className={`Heading Heading--1 ${props.styles}`}>
          {props.children ? props.children : props.text}
        </h1>
      );
      break;
    case 2:
      heading = (
        <h2 className={`Heading Heading--2 ${props.styles}`}>
          {props.children ? props.children : props.text}
        </h2>
      );
      break;
    case 3:
      heading = (
        <h3 className={`Heading Heading--3 ${props.styles}`}>
          {props.children ? props.children : props.text}
        </h3>
      );
      break;
    case 4:
      heading = (
        <h4 className={`Heading Heading--4 ${props.styles}`}>
          {props.children ? props.children : props.text}
        </h4>
      );
      break;
    default:
      break;
  }
  return heading;
};

export default Heading;
