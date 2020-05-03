import React, { useState } from "react";
import Heading from "./Heading";
import ContainerFlex from "./ContainerFlex";
import Button from "./Button";
import Icon from "./Icon";

import { github, scrollUp, scrollDown } from "../static/svgs/svg-depot";

const ProjectSection = (props) => {
  const [scroll, setScroll] = useState(0);
  const [downScrollSpeed, setDownScrollSpeed] = useState(0);
  const [upScrollSpeed, setUpScrollSpeed] = useState(0);
  const [upScrollIconSize, setUpScrollIconSize] = useState(1);
  const [downScrollIconSize, setDownScrollIconSize] = useState(1);

  const handleMouseDown = (e) => {};
  return (
    <article className={`ProjectSection ${props.styles}`}>
      <ContainerFlex flexProps='align-items-center'>
        <Heading level={3} text={props.title} styles='margin-lg-r' />
        <Button
          type='link'
          label='Live Site'
          url='https://www.chasingenglish.com'
          styles='Button-sm Button-on-light-bg margin-lg-r'
        />
        <Icon
          type='svg-link'
          svg={github}
          url='https://github.com/chefThomas/chasing-english'
          alt='github icon'
          inline={{ width: "30px", position: "absolute", bottom: "-15px" }}
        />

        {/* textScroller--top-blind{} */}
      </ContainerFlex>
      <section className='ProjectSection__main'>
        <div className='textScroller'>
          <div className='textScroller--scroll-control'>
            <button
              onClick={() => setScroll(scroll + 20)}
              onMouseDown={handleMouseDown}
            >
              <Icon type='svg' svg={scrollUp} alt='up arrow' />
            </button>
            <button
              onClick={() => setScroll(scroll - 20)}
              onMouseDown={handleMouseDown}
            >
              <Icon type='svg' svg={scrollDown} alt='down arrow' />
            </button>
          </div>
          <div
            className={
              scroll === 0
                ? "textScroller--top-blind"
                : "textScroller--top-blind--scrolling"
            }
          ></div>
          <div
            style={{ transform: `translate(0,${scroll}px)` }}
            className='ProjectSection__text'
          >
            {props.textBody}
          </div>
          <div className={`textScroller--bottom-blind`}></div>
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
