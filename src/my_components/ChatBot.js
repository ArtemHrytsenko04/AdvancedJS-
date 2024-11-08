import React, {useState} from "react";
import './Chatbot.css';


function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [userMessage, setUserMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  const sendMessage = () => {
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { text: userMessage, sender: "user" },
        { text: "Thanks for your message! We'll get back to you shortly.", sender: "bot" }
      ]);
      setUserMessage("");
    }
  };

  return (
    <div className={`chatbox-container ${isOpen ? "open" : ""}`}>
      <div className="chatbox-header" onClick={toggleChat}>
        <span>{isOpen ? "Close Chat" : "Chat with us!"}</span>
      </div>
      {isOpen && (
        <div className="chatbox-body">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type your message"
              value={userMessage}
              onChange={handleInputChange}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;

