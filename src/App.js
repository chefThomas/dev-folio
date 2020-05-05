import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Routes from "./components/Routes";

import GlobalNav from "./components/GlobalNav";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "../src/stylesheets/css/main.css";

function App() {
  return (
    <Router>
      <GlobalNav />
      <Header styles='margin-lg-bottom' />
      <Switch>
        <Routes />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
