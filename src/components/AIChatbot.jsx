import React, { useState } from 'react';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I am an AI chatbot. How can I assist you today?',
      time: new Date().toLocaleTimeString()
    },
    {
      id: 2,
      type: 'user',
      text: 'Can you tell me more about your capabilities?',
      time: new Date().toLocaleTimeString()
    },
    {
      id: 3,
      type: 'bot',
      text: 'I can help with a variety of tasks, including answering questions, providing information, and assisting with processes.',
      time: new Date().toLocaleTimeString()
    }
  ]);
  
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        text: inputText,
        time: new Date().toLocaleTimeString()
      };
      
      setMessages([...messages, newMessage]);
      setInputText('');
      
      // Mock AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: 'Thank you for your message. I understand you want to know more about this topic. Let me help you with that.',
          time: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>AI Assistant</h1>
        <p>Ask me anything!</p>
      </div>
      
      <div className="ai-chat-container">
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-avatar">
                {message.type === 'bot' ? '🤖' : '👤'}
              </div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">{message.time}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="chat-input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
          />
          <button className="send-btn" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;