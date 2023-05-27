import React from 'react';

import './Section.css';
import Filter from '../Filter/Filter';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Pagination from '../Pagination/Pagination';
import Popup from '../Popup/Popup';
import Api from '../../utils/Api';

function Section({ title, name, data }) {
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const [id, setId] = React.useState('');

  React.useEffect(() => {
    const uri = data[0]['xml-properties'][0]['xml-property'].find(el => el['$'].name === 'uriTemplate')['$'].value;
    const id = data[0]['java-attributes'][0]['xml-element'].find(el => el['$']['xml-key'] === 'true')['$'].name;
    setUrl(uri.slice(0, uri.lastIndexOf('/')));
    setId(id);
  },[data]);

  const closePopup = (event) => {
    event.preventDefault();
    if (typeof event === "undefined" || event.target === event.currentTarget) {
      setIsAddOpen(false);
    }
  };

  const handleAddNew = () => {
    setIsAddOpen(true);
  }

  const handleSendData = (output) => {
    return Api.uploadData(`${url}/${output[id]}`, output);
  }

  return (
    <section className='section'>
      <h2 className='section__title'>{title}</h2>
      <Filter />
      {/* Table */}
      <PrimaryButton className='section__add' text={`Add new ${name}`} onClick={handleAddNew} />
      <Pagination />
      <Popup
        name={name}
        title={title}
        isOpen={isAddOpen}
        onClose={closePopup}
        onSubmit={handleSendData}
        data={data[0]['java-attributes'][0]['xml-element']}
      />
    </section>
  );
};

export default Section;