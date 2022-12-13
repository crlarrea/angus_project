import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const Adoption = () => {
  return (
    <section className='adoptions'>
      <article>
        <Player
          autoplay
          loop
          speed='0.2'
          src={require('../assets/img/rehoming.json')}
        >
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </article>
      <article>
        <h3>Adopt a cat</h3>
        <p>
          All of our cats and kittens are health-checked by our vets they have
          at least their 1st vaccination they are neutered along with microchip,
          and up to date with flea and worm treatments.
        </p>
        <form>
          <label htmlFor='fullName'>Full Name</label>
          <input type='text' id='fullName' name='fullName' required/>
          <label htmlFor='emailAddress'>Email</label>
          <input type='email' id='emailAddress' name='emailAddress' required/>
          <input type='checkbox'/>
        </form>
      </article>
    </section>
  );
};
