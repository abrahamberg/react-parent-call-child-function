import React, { useState, useEffect } from 'react';

const ChatComponent = ({ onSend, onReceiveMessage }) => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        onReceiveMessage((newMessage) => {
            setMessages(prevMessages => [...prevMessages, newMessage]);
        });
    }, [onReceiveMessage]);

    const handleSend = () => {
        onSend(inputText);
        setInputText('');
    };

    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <input 
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatComponent;
