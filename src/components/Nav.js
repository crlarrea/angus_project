import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  const showShoppingList = () => {
    document.querySelector('#shopping-list').classList.toggle('show')
  };
  return (
    <header>
      <article className='logo'>
        <img src={logo} alt='angus cat rescue logo' />
        <h1>
          <span>angus</span>
          <br />
          cat rescue
        </h1>
      </article>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to='/home'
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink to='/donations'>donations</NavLink>
          </li>
          <li>
            <NavLink to='/adoption'>adoption</NavLink>
          </li>
          <li>
            <NavLink to='/events'>events</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>shop</NavLink>
          </li>
        </ul>
      </nav>
      <article className='shopping-cart'>
        <span>
          <FontAwesomeIcon icon={faCartShopping} onClick={showShoppingList} />
        </span>
      </article>
    </header>
  );
};
