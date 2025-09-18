import React, { useState, useRef, useEffect } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am an AI chatbot. How can I assist you today?",
      isUser: false,
      timestamp: "21:16:33"
    },
    {
      id: 2,
      text: "Can you tell me more about your capabilities?",
      isUser: true,
      timestamp: "21:16:33"
    },
    {
      id: 3,
      text: "I can help with a variety of tasks, including answering questions, providing information, and assisting with processes.",
      isUser: false,
      timestamp: "21:16:33"
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Gemini API configuration
  // Replace 'YOUR_GEMINI_API_KEY_HERE' with your actual Gemini API key
  const GEMINI_API_KEY = 'AIzaSyCBz18rgiPdYnqcFNwXEUCBqrAwJ-h02R0';
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const sendToGemini = async (message) => {
    // Check if API key is configured
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
      console.error('❌ Gemini API key not configured!');
      const errorMessage = {
        id: Date.now(),
        text: "❌ API key not configured. Please add your Gemini API key to the .env file.",
        isUser: false,
        timestamp: getCurrentTime()
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    try {
      setIsTyping(true);
      console.log('🚀 Sending request to Gemini API...');
      console.log('Message:', message);
      console.log('API URL:', GEMINI_API_URL.replace(GEMINI_API_KEY, 'API_KEY_HIDDEN'));
      
      const requestBody = {
        contents: [{
          parts: [{
            text: message
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH", 
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      };

      console.log('📤 Request payload:', JSON.stringify(requestBody, null, 2));
      
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', response.headers);

      const responseText = await response.text();
      console.log('📥 Raw response:', responseText);

      if (!response.ok) {
        let errorDetails;
        try {
          errorDetails = JSON.parse(responseText);
          console.error('🔥 API Error Details:', errorDetails);
        } catch {
          console.error('🔥 Raw Error Response:', responseText);
        }
        
        throw new Error(`HTTP ${response.status}: ${errorDetails?.error?.message || responseText || 'Unknown error'}`);
      }

      let data;
      try {
        data = JSON.parse(responseText);
        console.log('✅ Parsed response:', data);
      } catch (parseError) {
        console.error('🔥 Failed to parse response as JSON:', parseError);
        throw new Error('Invalid JSON response from API');
      }
      
      // Check if response has expected structure
      if (!data.candidates || !data.candidates[0]) {
        console.error('🔥 No candidates in response:', data);
        throw new Error('No response candidates from Gemini API');
      }

      if (!data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
        console.error('🔥 Invalid response structure:', data.candidates[0]);
        throw new Error('Invalid response structure from Gemini API');
      }

      const aiResponse = data.candidates[0].content.parts[0].text;
      console.log('✅ AI Response:', aiResponse);
      
      if (!aiResponse) {
        throw new Error('Empty response from Gemini API');
      }

      const newMessage = {
        id: Date.now(),
        text: aiResponse,
        isUser: false,
        timestamp: getCurrentTime()
      };
      
      setMessages(prev => [...prev, newMessage]);
      console.log('✅ Message added to chat');
      
    } catch (error) {
      console.error('🔥 Gemini API Error:', error);
      console.error('🔥 Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      
      // More specific error messages
      let errorMessage = "Sorry, I'm having trouble connecting right now. Please try again later.";
      
      if (error.message.includes('API key')) {
        errorMessage = "❌ Invalid API key. Please check your Gemini API key.";
      } else if (error.message.includes('quota')) {
        errorMessage = "⚠️ API quota exceeded. Please try again later.";
      } else if (error.message.includes('400')) {
        errorMessage = "⚠️ Invalid request. Please check your message.";
      } else if (error.message.includes('403')) {
        errorMessage = "❌ Access denied. Please check your API key permissions.";
      } else if (error.message.includes('429')) {
        errorMessage = "⏱️ Rate limit exceeded. Please wait a moment and try again.";
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        errorMessage = "🌐 Network error. Please check your internet connection.";
      }
      
      const newMessage = {
        id: Date.now(),
        text: errorMessage + "\n\n🔍 Check browser console for detailed error logs.",
        isUser: false,
        timestamp: getCurrentTime()
      };
      
      setMessages(prev => [...prev, newMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = inputValue.trim();
      const newMessage = {
        id: Date.now(),
        text: userMessage,
        isUser: true,
        timestamp: getCurrentTime()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      
      // Send to Gemini API
      sendToGemini(userMessage);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>AI Assistant</h1>
        <p>Ask me anything!</p>
      </div>
      
      <div className="chat-messages">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-icon">
              {message.isUser ? '👤' : '🤖'}
            </div>
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">{message.timestamp}</div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message bot-message typing-indicator">
            <div className="message-icon">🤖</div>
            <div className="message-content">
              <div className="typing-animation">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input-container">
        <div className="input-wrapper">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="message-input"
          />
          <button 
            onClick={handleSendMessage}
            className="send-button"
            disabled={!inputValue.trim()}
          >
            Send
          </button>
        </div>
      </div>
      
      <style jsx>{`
        

        .chat-header {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          padding: 25px;
          text-align: center;
          border-radius: 20px 20px 0 0;
        }

        .chat-header h1 {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 5px 0;
        }

        .chat-header p {
          font-size: 16px;
          opacity: 0.9;
          margin: 0;
        }

        .chat-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: #f8fafc;
        }

        .message {
          display: flex;
          gap: 12px;
          animation: slideIn 0.3s ease-out;
        }

        .user-message {
          flex-direction: row-reverse;
        }

        .user-message .message-content {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border-radius: 18px 18px 4px 18px;
        }

        .bot-message .message-content {
          background: white;
          color: #374151;
          border-radius: 18px 18px 18px 4px;
          border: 1px solid #e5e7eb;
        }

        .message-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          background: #f3f4f6;
          flex-shrink: 0;
        }

        .user-message .message-icon {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .bot-message .message-icon {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        }

        .message-content {
          max-width: 70%;
          padding: 12px 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .message-text {
          line-height: 1.5;
          margin-bottom: 5px;
        }

        .message-time {
          font-size: 11px;
          opacity: 0.6;
          text-align: right;
        }

        .user-message .message-time {
          opacity: 0.8;
        }

        .typing-indicator .message-content {
          padding: 16px;
        }

        .typing-animation {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9ca3af;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .chat-input-container {
          padding: 20px;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .input-wrapper {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .message-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 25px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .message-input:focus {
          border-color: #4f46e5;
        }

        .message-input::placeholder {
          color: #9ca3af;
        }

        .send-button {
          padding: 12px 24px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .send-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
        }

        .send-button:active {
          transform: translateY(0);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Scrollbar styling */
        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .chat-container {
            height: 90vh;
            margin: 10px;
            border-radius: 15px;
          }
          
          .chat-header {
            padding: 20px;
            border-radius: 15px 15px 0 0;
          }
          
          .chat-header h1 {
            font-size: 20px;
          }
          
          .chat-messages {
            padding: 15px;
          }
          
          .message-content {
            max-width: 85%;
          }
          
          .chat-input-container {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;