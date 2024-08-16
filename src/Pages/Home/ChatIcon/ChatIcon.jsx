// src/components/ChatIcon/ChatIcon.jsx

import React from 'react';
import './ChatIcon.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ChatIcon = ({ onClick }) => {
  return (
    <div className="chat-icon" onClick={onClick}>
      <i class="fa-solid fa-envelope"></i>
    </div>
  );
};

export default ChatIcon;
