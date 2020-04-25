import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./HomePage";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";

const Routes = () => {
  return (
    <>
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/resume' render={() => <ResumePage />} />
      <Route exact path='/contact' render={() => <ContactPage />} />
    </>
  );
};

export default Routes;
