import React from "react";

import './Popup.css';
import Form from "../Form/Form";

function Popup({ name, title, isOpen, onClose, onSubmit, data }) {
  const style = isOpen ? "popup_opened" : "";
  const [attributes, setAttributes] = React.useState([]);

  React.useEffect(() => {
    setAttributes(data.filter(el => {
      return el['$'].type.includes('String');
    }));
  },[data]);


  return (
    <div className={`popup ${style}`}>
      <div className='popup__container'>
        <Form name={name} title={title} onClose={onClose} onSubmit={onSubmit} data={attributes} />
      </div>
    </div>
  );
};

export default Popup;