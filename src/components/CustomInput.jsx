import React from "react";
import "./customInput.css";

function CustomInput({
  name,
  placeholder,
  className = "",
  rule,
  type,
  ...rest
}) {
  return (
    <input
    name={name}
      type={type}
      {...rest} // This passes down the necessary props like value, onChange from parent.
      {...rule} // Optionally, you can pass validation rules here if needed
      placeholder={placeholder}
      className={`custom-input ${className}`}
    />
  );
}

export default CustomInput;
