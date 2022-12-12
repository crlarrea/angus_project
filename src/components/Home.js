import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <section className='home'>
      <article>
        <h2>
          Welcome to
          <br />
          <span>Angus</span> Cat Rescue
        </h2>
        <p>
          We are committed to a single goal: to make the world{' '}
          <span>a better place for cats.</span>
        </p>
        <p>
          We are a private, non-profit organisation dedicated to finding
          volunteers to help cats in need.
        </p>
        <p>
          <strong>
            Explore our website to learn more about all that we’re doing to make
            a change.
          </strong>
        </p>
        <NavLink to='/donations'>Donate</NavLink>
      </article>
      <article>
        <Player autoplay loop speed="0.2" src={require('../assets/img/cat.json')}>
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </article>
      <article>
        <h3>Rehoming</h3>
        <p>
          We have a variety of cats looking for homes, some require
          access to the outdoors, some are indoor only.
        </p>
        <p>
          All of our cats and kittens are health-checked by our vets they have
          at least their 1st vaccination along with microchip, and up to date
          with flea and worm treatments.
        </p>
        <NavLink to='/adoption'>adopt today</NavLink>
      </article>

      <article>
        <Player autoplay loop src={require('../assets/img/rehoming.json')}>
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </article>
    </section>
  );
};
