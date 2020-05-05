import React from "react";

const Button = ({ type, label, styles, url }) => {
  return type === "link" ? (
    <a
      className={`Button ${styles}`}
      target='_blank'
      rel='noopener noreferrer'
      href={url}
    >
      {label}
    </a>
  ) : (
    <div className={`Button ${styles}`}>{label}</div>
  );
};

export default Button;
