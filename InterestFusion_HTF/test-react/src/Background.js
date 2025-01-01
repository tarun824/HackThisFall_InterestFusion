import React from 'react';
import './Background.css';

const Background = (props) => {
    return (
        <div className="background-container">
            {props.children}
        </div>
    );
}

export default Background;