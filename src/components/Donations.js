import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import paw from '../assets/img/paw.svg';
import tail from '../assets/img/tail.svg';
import purr from '../assets/img/purr.svg';

const donations = [
  { id: 'paws', amount: 2, image: paw },
  { id: 'tail', amount: 5, image: tail },
  { id: 'purr', amount: 10, image: purr },
];

const addToBasket = (ev) => {
  ev.preventDefault();
  console.log('added to basket');
};
export const Donations = () => {
  return (
    <section className='donations'>
      <article>
        <h3>choose your monthly donation</h3>
        <p>
          Can't adopt? Donating a small amount or sponsoring a cat can help us.
        </p>
      </article>
      <article>
        {donations.map((el) => {
          return (
            <div key={el.id}>
              <div>
                <img src={el.image} alt={el.id} />
              </div>

              <span>£{el.amount}</span>
              <h4>{el.id} plan</h4>
              <p>
                Can you spare £{el.amount} a month?
                <br />
                Every penny helps.
              </p>
              <span>
                <FontAwesomeIcon icon={faCirclePlus} />
              </span>
            </div>
          );
        })}
      </article>
      <article>
        <h4>One-off donation</h4>
        <div>
          <form onClick={addToBasket}>
            <input type='text' />
            <button>add</button>
          </form>
        </div>
      </article>
    </section>
  );
};
//<a href="https://www.freepik.com/free-vector/cat-paws-icon-collection_8270958.htm#query=cat&position=6&from_view=search&track=sph">Image by pch.vector</a> on Freepik
