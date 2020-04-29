import React from "react";
import me from "../static/self.png";

const Developer = ({ text, image }) => (
  <div className='DeveloperCard'>
    <div className='DeveloperCard__body'>
      <div className='DeveloperCard__body__text'>
        <p>
          I’m a web developer living in Seattle. I lean toward frontend and love
          building React apps, but also enjoy diving into server-side logic.
        </p>
        <p>
          I'm currently seeking opportunities to collaborate and grow while
          contributing to challenging and interesting projects. Please have a
          look at my work and reach out if you have any questions or just feel
          like having a chat.
        </p>
      </div>
      <div className='DeveloperCard__img-container'>
        <img
          className='DeveloperCard__img'
          style={{ width: "100%" }}
          src={me}
          alt='me'
        />
      </div>
    </div>
  </div>
);

export default Developer;
