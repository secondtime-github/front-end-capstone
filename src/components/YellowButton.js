import React from 'react';
import './YellowButton.css';

const YellowButton = ({ text }) => {
    return (
        <button
            className="yellow-button"
            aria-label='On Click'
        >
            {text}
        </button>
    );
}

export default YellowButton;
