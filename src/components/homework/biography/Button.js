import React from 'react';

const Button = ({ onClick, text }) => {
    return (
        <button className="biography__btn" onClick={() => onClick()}>
            {text}
        </button>
    );
};

export default Button;