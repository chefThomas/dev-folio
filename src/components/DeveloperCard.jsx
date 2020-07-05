import React from "react";

import { NavLink } from "react-router-dom";

import clipboard from "../static/icons8-copy-to-clipboard-16.png";

const DeveloperCard = ({ setSnackbar }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("noxidwebdev@gmail.com");
    setSnackbar({
      visible: true,
      message: "'noxidwebdev@gmail.com' copied to clipboard",
    });
  };
  return (
    <div className='DeveloperCard'>
      <div className='DeveloperCard__text'>
        <p className='DeveloperCard__text-head'>
          <span
            className='title'
            style={{
              fontSize: "1.25rem",
              marginRight: "1rem",
              fontWeight: "bold",
            }}
          >
            Want to chat?
          </span>
        </p>
        <p>
          Email me at{" "}
          <span className='email-link' onClick={copyToClipboard}>
            noxidwebdev@gmail.com{" "}
            <img
              alt='copy to clipboard icon'
              onClick={copyToClipboard}
              src={clipboard}
            />
          </span>
          &nbsp; or send a message through the{" "}
          <NavLink className='devcard-nav' exact to='/contact'>
            contact form.
          </NavLink>{" "}
        </p>
      </div>
    </div>
  );
};

export default DeveloperCard;
