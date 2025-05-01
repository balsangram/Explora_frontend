import React, { useState } from "react";
import "./custombutton.css";

function CustomButton({
  onClick,
  children,
  variant = "primary",
  delayDuration,
  type = "button",
  disabled = false,
}) {
  const [localDisabled, setLocalDisabled] = useState(false);

  const handleClick = (e) => {
    if (localDisabled || disabled) return;
    setLocalDisabled(true);
    onClick?.(e);

    if (delayDuration) {
      setTimeout(() => {
        setLocalDisabled(false);
      }, delayDuration);
    } else {
      setLocalDisabled(false);
    }
  };

  return (
    <button
      className={`custom-button ${variant}`}
      onClick={handleClick}
      type={type}
      disabled={localDisabled || disabled}
    >
      {children}
    </button>
  );
}

export default CustomButton;
