
import React from 'react';

const Chat = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Community Chat</h1>
        <p>Connect with fellow students</p>
      </div>
      
      <div className="chat-container">
        <div className="chat-sidebar">
          <h3>Active Chats</h3>
          <div className="chat-list">
            <div className="chat-item active">
              <span className="chat-name">General Discussion</span>
              <span className="chat-time">2:30 PM</span>
            </div>
            <div className="chat-item">
              <span className="chat-name">Study Group - Math</span>
              <span className="chat-time">1:15 PM</span>
            </div>
            <div className="chat-item">
              <span className="chat-name">Computer Science</span>
              <span className="chat-time">12:45 PM</span>
            </div>
          </div>
        </div>
        
        <div className="chat-main">
          <div className="chat-header">
            <h3>General Discussion</h3>
            <span className="online-count">24 online</span>
          </div>
          
          <div className="chat-messages">
            <div className="message">
              <div className="message-user">John Doe</div>
              <div className="message-text">Has anyone started the math assignment?</div>
              <div className="message-time">2:30 PM</div>
            </div>
            
            <div className="message">
              <div className="message-user">Jane Smith</div>
              <div className="message-text">Yes! I'm working on problem 3 right now.</div>
              <div className="message-time">2:31 PM</div>
            </div>
          </div>
          
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;