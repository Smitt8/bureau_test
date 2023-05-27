import React from "react";
import { NavLink } from "react-router-dom";

import './BurgerMenu.css'

function BurgerMenu({ isOpen, onClose }) {
  const style = isOpen ? "burger-menu_opened" : "";
  return (
    <nav className={`burger-menu ${style}`}>
      <button type='button' className='burger-menu__close' onClick={onClose}></button>
          <ul className='burger-menu__list'>
            <li>
              <NavLink className='burger-menu__link' activeClassName='burger-menu__link_active' exact to='/pnf'>
                PNF
              </NavLink>
            </li>
            <li>
            <NavLink className='burger-menu__link' activeClassName='burger-menu__link_active' to='/complex'>
                Complex
              </NavLink>
            </li>
          </ul>
    </nav>
  )
};

export default BurgerMenu;