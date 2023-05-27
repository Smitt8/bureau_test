import React from "react";

import './SecondaryButton.css';

function SecondaryButton({text, className, ...props }) {
  return (
    <button className={`secondary-button ${className}`} {...props}>{text}</button>
  );
};

export default SecondaryButton;