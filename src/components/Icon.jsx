import React from "react";

const Icon = ({ type, url, svg, src, alt, style }) => {
  return type === "svg" ? (
    <div className='Icon--svg'>{svg}</div>
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
    <img className='Icon' style={style} src={src} alt={alt} />
  );
};

export default Icon;
