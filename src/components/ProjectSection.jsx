import React from "react";
import Heading from "./Heading";
import ContainerFlex from "./ContainerFlex";
import Button from "./Button";
import Icon from "./Icon";

import { github } from "../static/svgs/svg-depot";

const ProjectSection = (props) => {
  return (
    <article className={`ProjectSection ${props.styles}`}>
      <ContainerFlex flexProps='align-items-center'>
        <Heading level={3} text={props.title} styles='margin-lg-r' />
        <Button
          type='link'
          label='Live Site'
          url={props.liveSiteUrl}
          styles='Button-sm Button-on-light-bg margin-lg-r'
        />
        <Icon
          type='svg-link'
          svg={github}
          url={props.repoUrl}
          alt='github icon'
          inline={{ width: "30px", position: "absolute", bottom: "-15px" }}
        />
      </ContainerFlex>
      <section className='ProjectSection__main'>
        <div className='textScroller'>
          <div className='textScroller--top-blind'></div>
          <div className='ProjectSection__text'>{props.textBody}</div>
          <div className='textScroller--bottom-blind'></div>
        </div>

        <div className='ProjectSection___screenshots-container'>
          <div className='screenshot-mobile-container'>
            <img
              className='screenshot-mobile'
              src={props.mobileImg}
              alt={props.alt1}
            />
          </div>
          <div className='screenshot-tablet-container'>
            <img
              className='screenshot-tablet'
              src={props.tabletImg}
              alt={props.alt2}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProjectSection;
