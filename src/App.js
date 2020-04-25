import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Routes from "./components/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Routes />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
