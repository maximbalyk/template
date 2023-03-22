import React from 'react';
import Button from "./Button";
const ButtonSection = ({ buttonDescription}) => {
    return (
        <div className="biography__btn-section">
            {buttonDescription.map(button =>(
                <Button key={button[1]} onClick={button[0]} text={button[1]}/>
            ))}
        </div>
    );
};

export default ButtonSection;