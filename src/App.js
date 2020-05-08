import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
import ContactPage from "./components/ContactPage";
import GlobalNav from "./components/GlobalNav";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "../src/stylesheets/css/main.css";

function App() {
  return (
    <>
      <GlobalNav />
      <Header styles='margin-lg-bottom' />
      <Route
        render={({ location }) => (
          <>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='fade' timeout={500}>
                <Switch location={location}>
                  <Route exact path='/' render={() => <HomePage />} />
                  <Route exact path='/resume' render={() => <ResumePage />} />
                  <Route exact path='/contact' render={() => <ContactPage />} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        )}
      />
    </>
  );
}

export default App;
