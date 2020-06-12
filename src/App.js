import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";

import ContactPage from "./components/ContactPage";
import GlobalNav from "./components/GlobalNav";
import Header from "./components/Header";
import MessagesPage from "./components/MessagesPage";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";

// import "../src/stylesheets/css/main.css";
import { api } from "./config.json";

const post = async (urlStub, body) => {
  console.log(body);
  let result = "";
  try {
    result = await axios.post(`${api.invokeUrl}/${urlStub}`, body);
  } catch (err) {
    console.log(`Post error: ${err}`);
    return;
  }
  return result;
};

const postMessage = async (body) => {
  console.log(body);
  try {
    const data = await post(`/messages`, body);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

function App() {
  const [messages, setMessages] = useState([]);

  async function fetchMessages() {
    const {
      data: { Items },
    } = await axios.get(`${api.invokeUrl}/messages`);

    setMessages(Items);
  }

  useEffect(() => {
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
                <Route
                  exact
                  path='/messages'
                  render={() => <MessagesPage messages={messages} />}
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
