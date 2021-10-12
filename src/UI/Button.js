import React from 'react';

const Button = (props) => {
    return (
        <div className="btn-wrapper">
            <button onClick={props.handleSubmit} className="btn">Search</button>
        </div>
    );
};

export default Button;