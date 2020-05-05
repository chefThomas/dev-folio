import React from "react";
import ProjectSection from "./ProjectSection";

import Heading from "./Heading";

// static imports
//images
import chasingEnglishMobile from "../static/chasingenglish-mobile.png";
import chasingEnglishTablet from "../static/chasingenglish-desktop.png";
import plumaMobile from "../static/pluma-mobile.png";
import plumaTablet from "../static/pluma-desktop.png";

// jsx
import chasingEnglish from "../static/project-descriptions/chasingEnglish.jsx";
import pluma from "../static/project-descriptions/pluma.jsx";

const HomePage = () => {
  return (
    <section className='HomePage'>
      <Heading level={2} text='Projects' />
      <ProjectSection
        styles='margin-lg-bottom'
        title='Chasing English'
        textBody={chasingEnglish()}
        mobileImg={chasingEnglishMobile}
        alt1='mobile screen'
        tabletImg={chasingEnglishTablet}
        alt2='tablet screen'
        liveSiteUrl='https://www.chasingenglish.com'
        repoUrl='https://github.com/chefThomas/chasing-english'
      />
      <ProjectSection
        title='Pluma'
        textBody={pluma()}
        mobileImg={plumaMobile}
        alt1='mobile screen'
        tabletImg={plumaTablet}
        alt2='tablet screen'
        liveSiteUrl='https://chefthomas.github.io/pluma/'
        repoUrl='https://github.com/chefThomas/pluma'
      />
    </section>
  );
};

export default HomePage;
