import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";

import ContactPage from "./components/ContactPage";
import GlobalNav from "./components/GlobalNav";
import Header from "./components/Header";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";

// import "../src/stylesheets/css/main.css";
import { api } from "./config.json";

const postMessage = async (body) => {
  try {
    const result = await axios.put(`${api.invokeUrl}/messages`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const {
        data: { Items },
      } = await axios.get(`${api.invokeUrl}/messages`);
      setMessages(Items);
    }
    fetchMessages();
  }, []);

  return (
    <>
      <GlobalNav />
      <Header styles='margin-lg-bottom' />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='fade' timeout={500}>
              <Switch location={location}>
                <Route exact path='/' render={() => <ProjectsPage />} />
                <Route exact path='/resume' render={() => <ResumePage />} />
                <Route
                  exact
                  path='/contact'
                  render={() => <ContactPage postMessage={postMessage} />}
                />
                <Route path='*' render={() => <ProjectsPage />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
}

export default App;
