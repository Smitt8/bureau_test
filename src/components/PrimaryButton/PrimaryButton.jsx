import React from "react";

import './PrimaryButton.css';

function PrimaryButton({ text, className, ...props }) {
  return (
    <button type="button" className={`primary-button ${className}`} {...props}>{text}</button>
  );
};

export default PrimaryButton;