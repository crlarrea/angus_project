import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const donations = [
  {id:'paws', amount: 2, image:''},
  {id:'tail', amount: 5, image:''},
  {id:'purr', amount: 10, image:''}
]
export const Donations = () => {
  return (
    <section className='donations'>
      <article>
        <h3>choose your monthly donation</h3>
        <p>Can't adopt? Donating a small amount or sponsoring a cat can help us.</p>
      </article>
      <article>
        {donations.map(el=>{
          return(<div key={el.id}>
            <img src={el.image}/>
            <span>£{el.amount}</span>
            <h4>{el.id} plan</h4>
            <p>Can you spare £{el.amount} a month?<br/>Every penny helps.</p>            
            <span><FontAwesomeIcon icon={faCirclePlus}/></span>
          </div>)
        })}
        
      </article>


    </section>
  )
}
