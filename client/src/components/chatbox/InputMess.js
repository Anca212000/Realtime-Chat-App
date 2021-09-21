import React from 'react';

import '../css/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const InputMess = ({ sendMessage, message, setMessage }) => (
    <form> 
        <div className="send-mess">
            <input className="textarea" type="text" placeholder="Type a message ..." 
            value={message} onChange={(event) => setMessage(event.target.value)} 
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
            <button className="but-send" onClick={(event) => sendMessage(event)}>
                <span>SEND <FontAwesomeIcon icon={faPaperPlane} className="font-aws-send" />
                </span>
            </button>
        </div>
    </form>
)

export default InputMess;