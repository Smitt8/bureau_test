import React from 'react';

import './Select.css';

function Select({optionsList}) {
  return (
    <select className='select'>
      <option className='select__option'>Select Filter</option>
      {optionsList.map((el, i) => {
        return (<option key={i} value={el.value}>{el.text}</option>)
      })}
    </select>
  );
};

export default Select;