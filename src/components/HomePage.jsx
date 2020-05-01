import React from "react";
import ProjectSection from "./ProjectSection";

import Heading from "./Heading";

import chasingEnglishMobile from "../static/chasingenglish-mobile.png";

import chasingEnglishTablet from "../static/chasingenglish-desktop.png";

import chasingEnglish from "../static/project-descriptions/chasingEnglish.jsx";

const HomePage = () => {
  return (
    <section className='HomePage'>
      <Heading level={2} text='Projects' />
      <ProjectSection
        title='Chasing English'
        textBody={chasingEnglish()}
        mobileImg={chasingEnglishMobile}
        alt1='mobile screen'
        tabletImg={chasingEnglishTablet}
        alt2='tablet screen'
      />
    </section>
  );
};

export default HomePage;
