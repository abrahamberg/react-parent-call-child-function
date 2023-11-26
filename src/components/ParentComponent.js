import React from 'react';
import ChatComponent from './ChatComponent';

const ParentComponent = () => {
    let receiveMessage;

    const handleMessageSend = (message) => {
        console.log("Message sent from chat:", message);
        if (receiveMessage) {
            receiveMessage( message.toUpperCase() );
        }
    };

    const setReceiveMessage = (callback) => {
        receiveMessage = callback;
    };

    // Additional logic for handling external message sources...

    return (
        <div>
            <ChatComponent 
                onSend={handleMessageSend} 
                onReceiveMessage={setReceiveMessage} 
            />
            {/* Other components... */}
        </div>
    );
};

export default ParentComponent;
