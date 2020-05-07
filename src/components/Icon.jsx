import React from "react";

const Icon = ({ type, url, svg, src, alt, styles }) => {
  return type === "svg" ? (
    <span className='Icon--svg' style={styles}>
      {svg}
    </span>
  ) : type === "svg-link" ? (
    <a
      className='Icon--svg-link'
      style={{ position: "relative", display: "flex", alignItems: "center" }}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {svg}
    </a>
  ) : (
    <img className='Icon' style={styles} src={src} alt={alt} />
  );
};

export default Icon;
