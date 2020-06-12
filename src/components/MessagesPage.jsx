import React from "react";

const Message = ({ text }) => <li>{text}</li>;

const MessagesPage = ({ messages }) => {
  return (
    <ul>
      {messages.map((props) => (
        <Message {...props} />
      ))}
    </ul>
  );
};

export default MessagesPage;
