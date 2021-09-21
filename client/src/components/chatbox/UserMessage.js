import React from 'react';
import {emojify} from 'react-emojione';

import '../css/style.min.css';

const UserMessage = ( {message: { user, text }, name} ) => {
    let is_send_by_current_user = false;

    const trim_name = name.trim().toLowerCase();

    if(user === trim_name) {
        is_send_by_current_user = true;
    }

    return (
        is_send_by_current_user
        ? (
            <div className="mess-container align-right">
                <p className="send-name-user">{trim_name}</p>
                <div className="user-message bgRed">
                    <p className="mess-text">{emojify(text)}</p>
                </div>
            </div>
        )
        : (
            <div className="mess-container align-left">
                <div className="user-message bgBlue">
                    <p className="mess-text">{emojify(text)}</p>
                </div>
                <p className="send-name-user">{user}</p>
            </div>
        )
    )
}

export default UserMessage;