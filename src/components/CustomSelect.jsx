import React from "react";
import "./customselect.css";

function CustomSelect({ name, children, className = "", ...rest }) {
  return (
    <select name={name} className={`custom-select ${className}`} {...rest}>
      {children}
    </select>
  );
}

export default CustomSelect;
