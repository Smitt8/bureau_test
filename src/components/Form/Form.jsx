import React from "react";
import { splitName } from "../../utils/utils";

import './Form.css';
import Input from "../Input/Input";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

function Form({name, title, onClose, onSubmit, data }) {
  const [output, setOutput] = React.useState({});

  const handleInput = (event) => {
    const { target } = event;
    setOutput({
      ...output,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(output).then(() => {
      setOutput({});
      onClose();
    }).catch(err => {
      console.log(err);
      alert('Ошибка соединения с сервером!');
    });
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form__title'>{`Create New ${title}`}</h2>
      <p className='form__info'>Please fill all mandatory fields with *</p>
      <ul className='form__inputs'>
        {
          data.map((el) => {
            return (<li key={el['$'].name} className='form__item'>
                <label htmlFor={el['$'].name} className='form__heading'>
                  {
                  `${splitName(el['$']['java-attribute'])} ${(el['$']['required'] === 'true') ? '*' : ''}`
                  }
                </label>
                <Input
                  name={el['$'].name}
                  placeholder={splitName(el['$']['java-attribute'])}
                  required={(el['$']['required'] === 'true')}
                  onChange={handleInput}
                  value={output[el['$'].name] || ''}
                />
              </li>);
          })
        }
      </ul>
      <div className='form__buttons'>
        <SecondaryButton className='form__button' text='Close' onClick={onClose} />
        <SecondaryButton type='submit' className='form__button' text={`Create ${name}`} />
      </div>
    </form>
  );
};

export default Form;