import React from "react";

import './Input.css';

function Input(params) {
  return (
    <input className='input' type="text" {...params}/>
  );
};

export default Input;