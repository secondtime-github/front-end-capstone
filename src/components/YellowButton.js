import React from 'react';
import './YellowButton.css';

const YellowButton = ({ text }) => {
    return (
        <button className="yellow-button">
            {text}
        </button>
    );
}

export default YellowButton;
