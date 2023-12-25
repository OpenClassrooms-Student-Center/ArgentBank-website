import React from 'react';

const TextInput = ({ className, id, label, type = 'text', autoComplete = 'off', onChange, value }) => {
    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                autoComplete={autoComplete}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default TextInput;
