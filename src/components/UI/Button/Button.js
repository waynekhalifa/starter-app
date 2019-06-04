import React from 'react';

const Button = ( props ) => (
    <button
        className={["button", props.btnType].join(' ')}
        disabled={props.disabled}
        onClick={props.onClick}>{props.children}</button>
);

export default Button;