import React from "react";

import ProjectSection from "./ProjectSection";
import Heading from "./Heading";
import Footer from "./Footer";
import Page from "./Page";

//images
import chasingEnglishMobile from "../static/chasingenglish-mobile.png";
import chasingEnglishTablet from "../static/chasingenglish-desktop.png";
import plumaMobile from "../static/pluma-mobile.png";
import plumaTablet from "../static/pluma-desktop.png";
import iconReact from "../static/logos_react.png";
import iconAntDesign from "../static/logos_ant-design.png";
import iconExpress from "../static/logos_express.png";
import iconHeroku from "../static/logos_heroku.png";
import iconJavaScript from "../static/logos_javascript.png";
import iconJquery from "../static/logos_jquery.png";
import iconMongoDb from "../static/logos_mongodb.png";
import iconNode from "../static/logos_node.png";
import iconSass from "../static/logos_sass.png";
import iconStripe from "../static/logos_stripe.png";

// jsx project desriptions
import chasingEnglish from "../static/project-descriptions/chasingEnglish.jsx";
import pluma from "../static/project-descriptions/pluma.jsx";

const ProjectsPage = () => {
  return (
    <Page>
      <Heading level={2} text='Projects' />
      <ProjectSection
        stackIcons={[
          iconReact,
          iconAntDesign,
          iconSass,
          iconNode,
          iconExpress,
          iconMongoDb,
          iconStripe,
          iconHeroku,
        ]}
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
        mainFlexDirection={{ flowDirection: "row-reverse" }}
        stackIcons={[iconJavaScript, iconJquery, iconSass]}
        title='Pluma'
        textBody={pluma()}
        mobileImg={plumaMobile}
        alt1='mobile screen'
        tabletImg={plumaTablet}
        alt2='tablet screen'
        liveSiteUrl='https://chefthomas.github.io/pluma/'
        repoUrl='https://github.com/chefThomas/pluma'
      />

      <Footer />
    </Page>
  );
};

export default ProjectsPage;
