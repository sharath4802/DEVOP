import React, { useState } from "react";

function ChatComp() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    setChat([...chat, message]);
    setMessage("");
  };

  return (
    <div>
      <h2>Chat App (useState)</h2>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

      <ul>
        {chat.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChatComp;