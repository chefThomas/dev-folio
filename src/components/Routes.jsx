import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

const Routes = () => {
  return (
    <>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/portfolio' render={() => <Portfolio />} />
      <Route exact path='/resume' render={() => <Resume />} />
      <Route exact path='/contact' render={() => <Contact />} />
    </>
  );
};

export default Routes;
