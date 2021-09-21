import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import './css/style.min.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="content">
            <div className="content-bg"></div>
            <div className="content-box">
                <h1>Join<br/>chatroom</h1>

                <form>
                    <FontAwesomeIcon icon={faUser} className="font-aws" /><input className="user-name" placeholder="Enter name ..." type="text" onChange={(event) => setName(event.target.value)} /><br/>
                    <FontAwesomeIcon icon={faLock} className="font-aws" /><input className="user-room" placeholder="Enter room ..." type="text" onChange={(event) => setRoom(event.target.value)} />

                    <div class="button-go">
                        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <button className="but-submit" type="submit"><span>CONTINUE</span></button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Join;