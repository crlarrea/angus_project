import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer>
      <article>
        <ul>
          <li>
            <a href='mailto:info@anguscatrescue.co.uk'>
              E: info@anguscatrescue.co.uk
            </a>
          </li>
          <li>
            <a href='mailto:info@anguscatrescue.co.uk'>M: 079 820 64765</a>
          </li>
        </ul>
      </article>
      
      <article>

      <ul>
          <li>
            <a
              href='https://www.instagram.com/anguscatrescue'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
          </li>

          <li>
            <a
              href='https://www.instagram.com/anguscatrescue'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </a>
          </li>

          <li>
            <a
              href='https://www.instagram.com/anguscatrescue'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
          </li>
        </ul>
        <p>
          Get in touch with <strong>Angus Cat Rescue</strong> to learn more about our work and
          find out how to donate.<br/>We appreciate your support!
        </p>
        <p>&copy;{new Date().getFullYear()}</p>
      </article>
    </footer>
  );
};
