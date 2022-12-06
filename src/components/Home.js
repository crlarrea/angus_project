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
          We are committed to a single goal: to make the world  <span>a better place
          for cats.</span> 
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
        <Player autoplay loop src={require('../assets/img/greeting.json')}>
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}                     
          />
        </Player>
      </article>
    </section>
  );
};
