import React from 'react';

import './Filter.css';
import Select from '../Select/Select';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

const filters = [
  {
    value:1,
    text:1,
  },
  {
    value:2,
    text:2,
  },
  {
    value:3,
    text:3,
  },
];

function Filter() {
  return (
    <div className='filter'>
      <Select optionsList={filters} />
      <div className='filter__settings'>
        <Input placeholder='Please Enter Filter text' />
        <PrimaryButton className='filter__button' text='Add Filter' />
        <SecondaryButton className='filter__button' text='Clear Filters'/>
      </div>
    </div>
  );
};

export default Filter;