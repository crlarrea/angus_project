import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const ShoppingList = () => {
  const showShoppingList = () => {
    document.querySelector('#shopping-list').classList.toggle('show');
  };
  return (
    <aside className='shopping-list' id='shopping-list'>
      <span>
        <FontAwesomeIcon icon={faCircleXmark} onClick={showShoppingList} />
      </span>
      <h3>Shopping Trolley</h3>

      <ul>
        <li>item_i</li>
        <li>item_i</li>
        <li>item_i</li>
        <li>item_i</li>
        <li>item_i</li>
      </ul>
    </aside>
  );
};
