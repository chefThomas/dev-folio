import React from "react";

const Icon = ({ src, alt, styles }) => (
  <img src={src} alt={alt} className={`Icon ${styles}`} />
);

export default Icon;
