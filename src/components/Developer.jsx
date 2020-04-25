import React from "react";
import "../stylesheets/css/main.css";
import me from "../static/self.png";

const Developer = ({ text, image }) => (
  <div className='DeveloperCard'>
    <div className='DeveloperCard__body'>
      <div className='DeveloperCard__body__text'>
        <p>
          I’m a web developer living in Seattle. I lean toward frontend and love
          building React apps, but also enjoy diving into server-side logic.
        </p>
        <br />
        <p>
          I am currently seeking opportunities to collaborate with and learn
          from more experienced developers while contributing to challenging and
          interesting projects. Please have a look at my work and reach out if
          you like what you see, have any constructive criticism, or just feel
          like saying hi.
        </p>
      </div>
      <div>
        <img style={{ width: "100%" }} src={me} alt='me' />
      </div>
    </div>
  </div>
);

export default Developer;
