import React from 'react';

import './Header.css';

function Header({ onOpen }) {
  return (
    <header className='header'>
      <button className='header__menu' onClick={onOpen} />
      <h1 className="header__title">A&AI</h1>
    </header>
  )
};

export default Header;
