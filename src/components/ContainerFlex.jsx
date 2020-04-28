import React from "react";
import "../stylesheets/css/main.css";

//  flexProps: (String) flexbox properties and values separated by '-' Ex: justify-content-center.

const ContainerFlex = ({ flexProps, styles, children }) => {
  return (
    <div className={`ContainerFlex ${flexProps} ${styles}`}>{children}</div>
  );
};

export default ContainerFlex;
