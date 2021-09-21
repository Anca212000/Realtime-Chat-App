import React from 'react';

import '../css/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const InfoBar = ( {room} ) => (
    <div className='infobar'>
        <div className='leftContainer'>
            <FontAwesomeIcon icon={faComments} className="font-aws-comments" />
            <h3>{room}</h3>
        </div>
        <div className='rightContainer'>
            <a href="/">
                <FontAwesomeIcon icon={faTimes} className="font-aws-exit" />
            </a>
        </div>
    </div>
)

export default InfoBar;