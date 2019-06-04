import React from 'react';

const Input = ( props ) => {
    let inputElement = null;
    let inputClasses = ["input__element"];

    if ( props.invalid && props.shouldValidate && props.touched ) {
        inputClasses.push("invalid");
    }

    switch(props.elementType) {
        case('input') :
            inputElement = <input 
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.text}</option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input 
                className="input__element" 
                {...props.elementConfig}
                value={props.value} />
            break;
    }

    return (
        <div className="input">
            <label className="input__label">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;