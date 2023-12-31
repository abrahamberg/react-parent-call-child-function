import React, { useCallback } from 'react';
import Chat from './Chat';

const ParentComponent = () => {
    let receiveMessage;

    const handleMessageSend = (message) => {
        console.log("Message sent from chat:", message);
        if (receiveMessage) {
            receiveMessage( message.toUpperCase() );
        }
    };

    const setReceiveMessage = useCallback((callback) => {
        receiveMessage = callback;
    }, []); // dependencies array is empty, meaning this function is created once


    // Additional logic for handling external message sources...

    return (
        <div>
            <Chat 
                onSend={handleMessageSend} 
                onReceiveMessage={setReceiveMessage} 
            />
            {/* Other components... */}
        </div>
    );
};

export default ParentComponent;
