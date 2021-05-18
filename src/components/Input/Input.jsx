import React from 'react';


const Input = ({ name,
  placeholder,
  type = 'text',
  disabled,
  width,
  change,
  error,
  label,
  value,
  ...props }) => {

  return (

    <div
      {...props}

    >
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onChange={(e) => {
          change(e);
        }}
        error={error}
        name={name}
        value={value}
        placeholder={placeholder}
      />

      {error
        && (
          <p>
            {error.message}
          </p>
        )}
    </div>
  );
};

export default Input;