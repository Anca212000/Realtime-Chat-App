import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';

import './css/style.min.css';
import InfoBar from './header/InfoBar.js';
import InputMess from './chatbox/InputMess.js';
import Messages from './chatbox/Messages.js';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

let socket;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [chat_mess, setChatMess] = useState([]);

    const ADDRESS = 'localhost:5000';//'https://chat-messaging-app-reactjs.herokuapp.com/';

    let query = useQuery();

    useEffect(() => {
        const name = query.get("name");
        const room = query.get("room");

        socket = io(ADDRESS);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, (error) => {
            if(error) {
                alert(error);
            }
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ADDRESS, useLocation().search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setChatMess([...chat_mess, message]); // combine the old array with the new element resulting in a new array
            // '...' is Spread Operator and is used for arrays and select all the elements
        });
    }, [chat_mess]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(message, chat_mess);

    return (
        <div className="content">
            <div class="content-bg" id="messaging-box"></div>

            <div className="content-box"> 
                <InfoBar room={room} />
                <div className="content-messages">
                    <Messages messages={chat_mess} name={name} />
                </div>
                <InputMess sendMessage={sendMessage} message={message} setMessage={setMessage} />
            </div>
        </div>
    )
}

export default Chat;