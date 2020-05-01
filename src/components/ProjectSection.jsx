import React from "react";
import Heading from "./Heading";
import ContainerFlex from "./ContainerFlex";
import Button from "./Button";

const ProjectSection = (props) => (
  <article className={`ProjectSection ${props.styles}`}>
    <ContainerFlex flexProps='align-items-center'>
      <Heading level={3} text={props.title} styles='margin-lg-r' />
      <Button
        type='link'
        label='Live Site'
        url='https://www.chasingenglish.com'
        styles='Button-sm Button-on-light-bg'
      />
    </ContainerFlex>
    <section className='ProjectSection__main'>
      <div className='ProjectSection__text'>{props.textBody}</div>
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

export default ProjectSection;
