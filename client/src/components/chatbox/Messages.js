import React, { useEffect, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import '../css/style.min.css';
import UserMessage from './UserMessage.js';

const Messages = ( {messages, name} ) => (
    <ScrollToBottom className="all-users-messages">
        {messages.map((message, i) => <div key={i}><UserMessage message={message} name={name}/></div>)}
    </ScrollToBottom>
)

export default Messages;