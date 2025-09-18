import React, { useState, useEffect, useRef } from 'react';

const CommunityChatPage = () => {
  const [activeChat, setActiveChat] = useState('general');
  const [message, setMessage] = useState('');
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef(null);

  // Mock chat data - In real app, this would come from backend
  const [chatRooms] = useState([
    {
      id: 'general',
      name: 'General Discussion',
      lastMessage: '2:30 PM',
      onlineCount: 24,
      unreadCount: 0,
      category: 'general'
    },
    {
      id: 'math-study',
      name: 'Study Group - Math',
      lastMessage: '1:15 PM',
      onlineCount: 8,
      unreadCount: 2,
      category: 'study'
    },
    {
      id: 'computer-science',
      name: 'Computer Science',
      lastMessage: '12:45 PM',
      onlineCount: 15,
      unreadCount: 0,
      category: 'subject'
    },
    {
      id: 'web-dev',
      name: 'Web Development',
      lastMessage: '11:20 AM',
      onlineCount: 12,
      unreadCount: 5,
      category: 'subject'
    },
    {
      id: 'project-help',
      name: 'Project Help',
      lastMessage: '10:30 AM',
      onlineCount: 6,
      unreadCount: 1,
      category: 'help'
    },
    {
      id: 'career-advice',
      name: 'Career Advice',
      lastMessage: '9:15 AM',
      onlineCount: 18,
      unreadCount: 0,
      category: 'general'
    }
  ]);

  const [messages, setMessages] = useState({
    'general': [
      {
        id: 1,
        user: 'John Doe',
        avatar: '👨‍💻',
        message: 'Has anyone started the math assignment?',
        time: '2:30 PM',
        isOwn: false
      },
      {
        id: 2,
        user: 'Jane Smith',
        avatar: '👩‍🎓',
        message: 'Yes! I\'m working on problem 3 right now.',
        time: '2:31 PM',
        isOwn: false
      },
      {
        id: 3,
        user: 'Mike Johnson',
        avatar: '👨‍🎓',
        message: 'Need help with calculus integration techniques. Anyone free?',
        time: '2:35 PM',
        isOwn: false
      }
    ],
    'math-study': [
      {
        id: 1,
        user: 'Sarah Wilson',
        avatar: '👩‍🏫',
        message: 'Let\'s review derivatives today',
        time: '1:10 PM',
        isOwn: false
      },
      {
        id: 2,
        user: 'Alex Chen',
        avatar: '👨‍🎓',
        message: 'Perfect! I need help with the chain rule',
        time: '1:15 PM',
        isOwn: false
      }
    ],
    'computer-science': [
      {
        id: 1,
        user: 'David Kim',
        avatar: '👨‍💻',
        message: 'Anyone working on the algorithms assignment?',
        time: '12:40 PM',
        isOwn: false
      },
      {
        id: 2,
        user: 'Lisa Zhang',
        avatar: '👩‍💻',
        message: 'Yes! The binary tree implementation is tricky',
        time: '12:45 PM',
        isOwn: false
      }
    ],
    'web-dev': [],
    'project-help': [],
    'career-advice': []
  });

  const [onlineUsers] = useState([
    { name: 'John Doe', avatar: '👨‍💻', status: 'online' },
    { name: 'Jane Smith', avatar: '👩‍🎓', status: 'online' },
    { name: 'Mike Johnson', avatar: '👨‍🎓', status: 'online' },
    { name: 'Sarah Wilson', avatar: '👩‍🏫', status: 'away' },
    { name: 'Alex Chen', avatar: '👨‍🎓', status: 'online' },
    { name: 'David Kim', avatar: '👨‍💻', status: 'online' },
    { name: 'Lisa Zhang', avatar: '👩‍💻', status: 'online' },
    { name: 'Emma Brown', avatar: '👩‍🎓', status: 'online' }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeChat]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: 'You',
      avatar: '👤',
      message: message,
      time: new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }),
      isOwn: true
    };

    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage]
    }));

    setMessage('');

    // Simulate response after 1-2 seconds
    setTimeout(() => {
      const responses = [
        'Great question! Let me help with that.',
        'I had the same issue yesterday. Here\'s what worked for me...',
        'Check the documentation on that topic.',
        'Anyone else having similar problems?',
        'Thanks for sharing! Very helpful.',
        'Let me know if you need more clarification.'
      ];

      const randomResponse = {
        id: Date.now() + 1,
        user: 'Helper Bot',
        avatar: '🤖',
        message: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        }),
        isOwn: false
      };

      setMessages(prev => ({
        ...prev,
        [activeChat]: [...(prev[activeChat] || []), randomResponse]
      }));
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getCurrentRoom = () => {
    return chatRooms.find(room => room.id === activeChat);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'general': return '💬';
      case 'study': return '📚';
      case 'subject': return '🎓';
      case 'help': return '🆘';
      default: return '💬';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return '#10B981';
      case 'away': return '#F59E0B';
      case 'offline': return '#6B7280';
      default: return '#6B7280';
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <div className="sidebar-header">
          <h2>🌟 Community Chat</h2>
          <p>Connect with fellow students</p>
        </div>

        <div className="active-chats-section">
          <h3>Active Chats</h3>
          <div className="chat-list">
            {chatRooms.map(room => (
              <div
                key={room.id}
                className={`chat-item ${activeChat === room.id ? 'active' : ''}`}
                onClick={() => setActiveChat(room.id)}
              >
                <div className="chat-icon">
                  {getCategoryIcon(room.category)}
                </div>
                <div className="chat-info">
                  <div className="chat-name">{room.name}</div>
                  <div className="chat-meta">
                    <span className="last-message">{room.lastMessage}</span>
                    <span className="online-count">{room.onlineCount} online</span>
                  </div>
                </div>
                {room.unreadCount > 0 && (
                  <div className="unread-badge">{room.unreadCount}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="online-users-section">
          <h3>Online Users ({onlineUsers.filter(u => u.status === 'online').length})</h3>
          <div className="users-list">
            {onlineUsers.slice(0, 6).map((user, index) => (
              <div key={index} className="user-item">
                <div className="user-avatar">
                  {user.avatar}
                  <div 
                    className="status-dot" 
                    style={{ backgroundColor: getStatusColor(user.status) }}
                  ></div>
                </div>
                <span className="user-name">{user.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <div className="room-info">
            <h2>{getCurrentRoom()?.name}</h2>
            <p>{getCurrentRoom()?.onlineCount} online</p>
          </div>
          <div className="header-actions">
            <button className="action-btn" title="Search Messages">🔍</button>
            <button className="action-btn" title="Room Settings">⚙️</button>
            <button className="action-btn" title="Video Call">📹</button>
          </div>
        </div>

        <div className="messages-container">
          {(messages[activeChat] || []).map(msg => (
            <div key={msg.id} className={`message ${msg.isOwn ? 'own-message' : ''}`}>
              <div className="message-avatar">{msg.avatar}</div>
              <div className="message-content">
                <div className="message-header">
                  <span className="message-user">{msg.user}</span>
                  <span className="message-time">{msg.time}</span>
                </div>
                <div className="message-text">{msg.message}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="message-input-container">
          <div className="input-wrapper">
            <button className="attachment-btn" title="Add File">📎</button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message ${getCurrentRoom()?.name}...`}
              className="message-input"
            />
            <button className="emoji-btn" title="Add Emoji">😊</button>
            <button 
              onClick={sendMessage}
              className="send-btn"
              disabled={!message.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chat-container {
          display: flex;
          height: 100vh;
          background: #f8fafc;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .chat-sidebar {
          width: 320px;
          background: white;
          border-right: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          padding: 20px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
        }

        .sidebar-header h2 {
          margin: 0 0 5px 0;
          font-size: 1.3rem;
        }

        .sidebar-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.9rem;
        }

        .active-chats-section {
          flex: 1;
          padding: 20px;
        }

        .active-chats-section h3 {
          margin: 0 0 15px 0;
          color: #374151;
          font-size: 1rem;
        }

        .chat-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .chat-item {
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .chat-item:hover {
          background: #f3f4f6;
        }

        .chat-item.active {
          background: #eff6ff;
          border: 1px solid #3b82f6;
        }

        .chat-icon {
          font-size: 1.2rem;
          margin-right: 12px;
        }

        .chat-info {
          flex: 1;
        }

        .chat-name {
          font-weight: 500;
          color: #374151;
          margin-bottom: 2px;
        }

        .chat-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #6b7280;
        }

        .unread-badge {
          background: #ef4444;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
        }

        .online-users-section {
          padding: 20px;
          border-top: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .online-users-section h3 {
          margin: 0 0 15px 0;
          color: #374151;
          font-size: 0.9rem;
        }

        .users-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .user-item {
          display: flex;
          align-items: center;
          padding: 6px 8px;
          border-radius: 8px;
          transition: background 0.2s ease;
        }

        .user-item:hover {
          background: #e5e7eb;
        }

        .user-avatar {
          position: relative;
          margin-right: 10px;
        }

        .status-dot {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid white;
        }

        .user-name {
          font-size: 0.85rem;
          color: #374151;
        }

        .chat-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          background: white;
          border-bottom: 1px solid #e5e7eb;
        }

        .room-info h2 {
          margin: 0 0 2px 0;
          color: #374151;
          font-size: 1.2rem;
        }

        .room-info p {
          margin: 0;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .header-actions {
          display: flex;
          gap: 10px;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: #f3f4f6;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: background 0.2s ease;
        }

        .action-btn:hover {
          background: #e5e7eb;
        }

        .messages-container {
          flex: 1;
          padding: 20px 25px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .message {
          display: flex;
          gap: 12px;
          max-width: 80%;
        }

        .message.own-message {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message.own-message .message-content {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
        }

        .message-avatar {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .message-content {
          background: white;
          border-radius: 12px;
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .message-user {
          font-weight: 600;
          font-size: 0.85rem;
        }

        .message-time {
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .own-message .message-time {
          opacity: 0.9;
        }

        .message-text {
          line-height: 1.4;
        }

        .message-input-container {
          padding: 20px 25px;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f9fafb;
          border-radius: 25px;
          padding: 8px 12px;
          border: 2px solid #e5e7eb;
          transition: border-color 0.2s ease;
        }

        .input-wrapper:focus-within {
          border-color: #4f46e5;
        }

        .attachment-btn, .emoji-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          padding: 8px;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .attachment-btn:hover, .emoji-btn:hover {
          background: #e5e7eb;
        }

        .message-input {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-size: 14px;
          padding: 8px 0;
          font-family: inherit;
        }

        .message-input::placeholder {
          color: #9ca3af;
        }

        .send-btn {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .send-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .chat-sidebar {
            width: 100%;
            position: absolute;
            z-index: 1000;
            height: 100%;
          }
          
          .chat-main {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CommunityChatPage;