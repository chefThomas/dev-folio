import React from "react";

import Icon from "./Icon";
import NavBar from "./NavBar";
import Heading from "./Heading";
import ContainerFlex from "./ContainerFlex";
import mountains from "../static/mountains-icon-business.png";

import "../stylesheets/css/main.css";

const GlobalNav = (prop) => {
  return (
    <div className='GlobalNav '>
      <ContainerFlex
        flexProps='align-items-center justify-content-space-between'
        styles='padding-md'
      >
        <ContainerFlex flexProps='align-items-center'>
          <Icon
            src={mountains}
            styles={{ width: "90px" }}
            alt='mountains logo'
          />
          <Heading
            level={1}
            text={"Tom Dixon"}
            className='Heading--name'
            styles='font-white'
          />
        </ContainerFlex>
        <NavBar />
      </ContainerFlex>
    </div>
  );
};

export default GlobalNav;
