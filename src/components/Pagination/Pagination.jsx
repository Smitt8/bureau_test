import React from "react";

import './Pagination.css';

function Pagination() {
  return (
    <nav className='pagination'>
      <ul className='pagination__list'>
        <li className='pagination__item'>&laquo;</li>
        <li className='pagination__item'>{'<'}</li>
        <li className='pagination__item pagination__item_selected'>1</li>
        <li className='pagination__item'>{'>'}</li>
        <li className='pagination__item'>&raquo;</li>
      </ul>
    </nav>
  );
};

export default Pagination;
