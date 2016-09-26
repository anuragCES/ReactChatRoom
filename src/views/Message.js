import React from 'react';

const Message = ({message}) => {
    console.log(message)
    return (
        <li>
            <h3> {message.text} </h3>
        </li>
    );
}

export default Message;
